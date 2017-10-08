import {Component, HostBinding, OnInit, ViewEncapsulation} from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {CoreUtilService} from "../../meepo-core/core-util.service";


declare const require;
let store = require('store');

@Component({
  selector: 'suyun-im',
  templateUrl: './im.component.html',
  styleUrls: ['./im.component.scss']
})
export class ImComponent implements OnInit {
  items: any[] = []
  constructor(
      public util: RunnerUtilService,
      public core: CoreUtilService
  ) {
    this.items = [
      {
        title: '消息',
        link: ['/im/index'],
        icon: 'xiaoxi'
      },
      {
        title: '附近',
        link: ['/im/friend'],
        icon: 'daohang'
      }
    ]
  }
  timer: any;
  timer2: any;
  ngOnInit() {
    this.timer = setInterval(()=>{
      this.util.refresh()
    },500)
    setTimeout(()=>{
      if(this.util.isAdmin || this.util.isManager){
        this.items.push({
          title: '客户',
          link: ['/im/member'],
          icon: 'wode1'
        })
      }
    },1000)

    this.util.addTimer(this.timer)
    this.util.showFooter()
    this.getMsg();
  }

  //获取消息
  es: any;
  getMsg(){

    if(!this.es){
      this.es = new window['EventSource'](this.core.createSocket('log.get','imeepos_runner_plugin_im'));
      this.es.onerror=()=>{}
      this.es.onopen = ()=>{}
      this.es.onmessage = (event: any)=>{
        let data = eval('(' + event.data + ')');
        if(data.code == 1){
          let info = data.info;

          info.map(res=>{
            // 插入
            let myMsgs = store.get('my.message'+res.openid)
            myMsgs = myMsgs || []; //本地已存储消息
            myMsgs.push(res)
            store.set('my.message'+res.openid,myMsgs);
          })
          let items = store.get('my.im.index')
          items = items || [];
          info.map((res,key)=>{
            let has = false;
            items.map(r=>{
              if(r.openid == res.openid){
                has = true;
                r.desc = res.content;
              }
            })
            if(!has){
              items.push({
                openid: res.openid,
                avatar: res.avatar,
                nickname: res.nickname,
                desc: res.content,
                display: res.create_time
              })
            }
          })
          store.set('my.im.index',items)
        }
      }
    }
  }

  ngOnDestroy(){
    this.util.clearTimer()
  }

}
