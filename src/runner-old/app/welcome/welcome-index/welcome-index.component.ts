import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {CoreUtilService} from "../../meepo-core/core-util.service";

declare const require;
let store = require('store');


@Component({
  selector: 'suyun-welcome-index',
  templateUrl: './welcome-index.component.html',
  styleUrls: ['./welcome-index.component.scss']
})
export class WelcomeIndexComponent implements OnInit {
  isText: boolean = true;

  items: any[] = []
  constructor(
    public util: RunnerUtilService,
    public router: Router,
    public core: CoreUtilService
  ) {
    this.items = ['']
  }

  ngOnInit() {
    this.util.hideFooter()
    this.init()
  }

  init(){
    this.util.checkVersion().subscribe(res=>{
      if(res){
        let data = store.get('setting.welcome.index')
        if(data){
          this.items = data;
        }else{
          this.getConfig();
        }
      }else{
        this.getConfig();
      }
    })
  }

  getConfig(){
    this.core.post('setting.get',{code: 'setting.welcome.index'}).subscribe(res=>{
      if(res.code == 0){
        this.core.post('setting.save',{code: 'setting.welcome.index',data: this.items}).subscribe(res=>{})
      }else{
        this.items = res.info;
      }
      store.set('setting.welcome.index',this.items);
    })
  }

  onUpload(e: any){
    let wx = window['wx'];
    wx.ready(()=>{
      wx.uploadImage({
        localId: e.localId, // 需要上传的图片的本地ID，由chooseImage接口获得
        isShowProgressTips: 1, // 默认为1，显示进度提示
        success: (res)=>{
          let serverId = res.serverId; // 返回图片的服务器端ID
          this.core.post('audio.image',{serverId: serverId}).subscribe(res=>{
            this.items[e.index] = res.info;
            //保存
            this.core.post('setting.save',{code: 'setting.welcome.index',data: this.items}).subscribe(res=>{
              toast('保存成功'+e.index)
            })
          })
        }
      });
    })
  }

  go(){
    if(store.get('showWelcomePage')){
      if(this.core.m == 'imeepos_runner'){
        if(this.core['do'] == 'detail'){
          let id = this.core['id'];
          this.core.post('task.detail',{id: id}).subscribe(res=>{
            if(res.code == 1){
              let info = res.info;
              if(info['type'] == 0 || info['type'] == 1){
                this.router.navigate(['/runner/song/detail',id])
                return false;
              }
              if(info['type'] == 2 || info['type'] == 3){
                this.router.navigate(['/runner/buy/detail',id])
                return false;
              }
              if(info['type'] == 4 || info['type'] == 5){
                this.router.navigate(['/runner/help/detail',id])
                return false;
              }
            }else{
              this.router.navigate(['/runner/post/index'])
            }
          })
        }
        else if (this.core['do'] == 'im'){
          this.router.navigate(['/im/index'])
        }else{
          this.router.navigate(['/runner/post/index'])
          return false;
        }
      }
      if(this.core.m == 'imeepos_coach'){
        this.router.navigate(['/coach/seat'])
        return false;
      }
      this.router.navigate(['/runner/post/index'])
      return false;
    }
    else{
      store.set('showWelcomePage',true)
      return true;
    }
  }
}
