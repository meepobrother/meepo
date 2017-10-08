import {Component, ElementRef, HostBinding, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ImMessageListComponent} from "../im-list/im-message-list/im-message-list.component";
import { CoreUtilService } from '../../meepo-core/core-util.service';
declare const require;
let store = require('store');
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;

@Component({
  selector: 'suyun-im-log',
  templateUrl: './im-log.component.html',
  styleUrls: ['./im-log.component.scss']
})
export class ImLogComponent implements OnInit {
  // @HostBinding('@routeState') routeState;
  offset: number = 400;
  toOpenid: string = '';
  myOpenid: string = 'fromUser'

  @ViewChild('imlist') imList: ImMessageListComponent
  @ViewChild('list') list: ElementRef

  constructor(
      public route: ActivatedRoute,
      public core: CoreUtilService
  ) { }
  myinfo: any;
  toinfo: any;
  ngOnInit() {
    this.route.params.subscribe(res=>{
      this.toOpenid = res.openid;
      this.core.post('member.info',{action: 'getInfo',openid: this.toOpenid}).subscribe(res=>{
        this.myinfo = res.info.myinfo;
        this.myinfo['openid'] = this.myinfo['openid'] || 'fromuser';
        this.myinfo['avatar'] = this.myinfo['avatar'] || '';
        this.myinfo['nickname'] = this.myinfo['nickname'] || '游客';

        this.toinfo = res.info.toinfo;
      })
    })
    this.onFocus({});
    this.onInit({})
  }
  scrollCtrl: any;
  onScrollInit(e: any){
    this.scrollCtrl = e;
    this.scrollCtrl && this.scrollCtrl.goBottom()
  }

  initSystem(){
    let now = new Date();
  }
  items: any[] = []
  onInit(e: any){
    let items = store.get('my.message'+this.toOpenid);
    items = items || [];
    this.items = e;
  }

  checkExistIndex(item: any){
    let index = store.get('my.im.index')
    if(index){
      let has = false;
      index.map(res=>{
        if(res.openid == item.toOpenid){
          has = true;
          res['display'] = new Date().getTime()
          res['desc'] = item.content;
        }
      })
      if(!has){
        index.push({openid:item.toOpenid,avatar: item.toAvatar,nickname: item.toNickname,num:0,display: new Date().getTime(),desc: item.content})
      }
    }else{
      index = [];
      index.push({openid:item.toOpenid,avatar: item.toAvatar,nickname: item.toNickname,num:0,display: new Date().getTime(),desc: item.content})
    }
    store.set('my.im.index',index)
  }

  onFocus(e: any){
    this.offset = this.list.nativeElement.clientHeight  - window.innerHeight - 155;
    this.scrollCtrl && this.scrollCtrl.goBottom()
  }

  onSend(e: any){
    let item = {
      openid: this.myOpenid,
      avatar: this.myinfo.avatar,
      nickname: this.myinfo.nickname,
      toOpenid: this.toOpenid,
      toAvatar: this.toinfo.avatar,
      toNickname: this.toinfo.nickname,
      content: e.content,
      type: e.type,
      data: e.data
    }
    if(!e.content){
      toast('请输入内容')
    }
    this.imList.addMsg(item)
    //检查是否存在该回话
    this.checkExistIndex(item)
    
    // 上传到服务器
    this.core.post('log.post',item,'imeepos_runner_plugin_im').subscribe(res=>{})
    this.offset = this.list.nativeElement.clientHeight - window.innerHeight - 155;
    this.scrollCtrl && this.scrollCtrl.goBottom()
  }


}
