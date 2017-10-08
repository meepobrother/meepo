import {Component, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {ImMessageListComponent} from "../im-list/im-message-list/im-message-list.component";
import {ActivatedRoute, Router} from "@angular/router";
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {CorePageComponent} from "../../meepo-core/core-share/core-page/core-page.component";
import {CoreUtilService} from "../../meepo-core/core-util.service";
declare const require;
let store = require('store');

@Component({
  selector: 'suyun-im-task',
  templateUrl: './im-task.component.html',
  styleUrls: ['./im-task.component.scss']
})
export class ImTaskComponent extends CorePageComponent implements OnInit {
  toOpenid: string = '';
  myOpenid: string = 'fromUser'

  @Input() id: number = 0;

  @ViewChild('imlist') imList: ImMessageListComponent

  constructor(
      public route: ActivatedRoute,
      public core: CoreUtilService,
      public router: Router,
      public util: RunnerUtilService,
      public ele: ElementRef,
      public render: Renderer2
  ) {
    super(ele,render)
  }
  myinfo: any = {};
  toinfo: any = {};
  recive: any = {};
  detail: any = {};
  sender: any = {};
  ngOnInit() {
    this.route.params.subscribe(res=>{
      if(res.id){
        this.id = res.id;
        this.core.post('task.detail',{id: this.id}).subscribe(res=>{
          this.detail = res.info;
          this.myinfo = res.info.myinfo;
          this.toinfo = res.info.toinfo;
        })
      }
    })
    this.onFocus({});
    this.onInit({})
    this.util.hideFooter()
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

  onItem(item: any){
    if(item.type == 0 || item.type == 1){
      this.router.navigate(['/runner/song/detail/',item.id])
    }
    if(item.type == 2 || item.type == 3){
      this.router.navigate(['/runner/buy/detail/',item.id])
    }
    if(item.type == 4 || item.type == 5){
      this.router.navigate(['/runner/help/detail/',item.id])
    }
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
    this.scrollCtrl && this.scrollCtrl.goBottom()
  }
  offset: number = 300;

  scrollCtrl: any;
  onScrollInit(e: any){
    this.scrollCtrl = e;
    this.scrollCtrl.goBottom()
  }

  onSend(e: any){
    let item = {
      openid: this.myinfo.openid,
      avatar: this.myinfo.avatar,
      nickname: this.myinfo.nickname,
      toOpenid: this.toinfo.openid,
      toAvatar: this.toinfo.avatar,
      toNickname: this.toinfo.nickname,
      content: e.content,
      type: e.type,
      data: e.data
    }
    this.imList.addMsg(item)
    //检查是否存在该回话
    this.checkExistIndex(item)

    // 上传到服务器
    this.core.post('log.post',item,'imeepos_runnerr_plugin_im').subscribe(res=>{})
    this.scrollCtrl && this.scrollCtrl.goBottom()
  }

}
