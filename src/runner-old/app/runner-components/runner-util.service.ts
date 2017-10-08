import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import { CoreUtilService } from '../meepo-core/core-util.service';
declare const require;
let store = require('store');
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RunnerUtilService {
  showMainFooter: boolean = true;
  edit: boolean = false
  oauth_code: string = '';

  config: any = {
    admin: {
      footers: []
    },
    index: {
      advs: [],
      navs: [
        {
          title: '帮我买',
          icon: '../addons/imeepos_runner/template/mobile/assets/images/buy.png',
          link: ['/buy/index']
        },
        {
          title: '帮我送',
          icon: '../addons/imeepos_runner/template/mobile/assets/images/song.png',
          link: ['/song/index']
        },
        {
          title: '帮帮忙',
          icon: '../addons/imeepos_runner/template/mobile/assets/images/help.png',
          link: ['/help/index']
        }
      ],
      tabs: [
        {
          title: '帮我送',
          active: true,
          code: 'song',
          display:0,
          mtitle: '帮送'
        },
        {
          title: '帮帮忙',
          active: false,
          code: 'help',
          display:0,
          mtitle: '帮忙'
        },
        {
          title: '帮我买',
          active: false,
          code: 'buy',
          display: 0,
          mtitle: '帮买'
        }
      ]
    },
    buy: {
      text: {
        tags: [
          { title: '随意购',active: true},
          {title: '买咖啡'},
          {title: '买香烟'},
          {title: '买酒'},
          {title: '买早餐'},
          {title: '买宵夜'},
          {title: '买药品'},
          {title: '卖水果'}
        ]
      }
    },
    footers: [
      {
        icon: 'hot',
        link: ['tasks/index'],
        active: false,
        title: '推荐'
      },
      {
        icon: 'add',
        link: ['post/index'],
        active: false,
        title: '发布'
      },
      {
        icon: 'account',
        link: ['home/index'],
        active: false,
        title: '我的'
      }
    ]
  }

  wxConfig: any = {}

  isRunner: boolean = false;
  isAdmin: boolean = false;
  isManager: boolean = false;

  timers: any = window['timers'] || []

  constructor(
    public router: Router,
    public core: CoreUtilService
  ) {
    this.refresh();
    setInterval(()=>{
      this.refresh()
    },300)

    this.getRole();
  }

  clearTimer(){
    this.timers = window['timers'];
    this.timers.map(res=>{
      clearInterval(res)
    })
  }

  addTimer(timer: any){
    window['timers'].push(timer)
  }

  checkVersion(){
    let version = store.get('version');
    return Observable.create(r=>{
      let nowVersion = window['version'];
      nowVersion = Number(nowVersion)
      nowVersion = nowVersion>0?nowVersion: 1;
      if(nowVersion != version){
        store.clearAll();
        store.set('version',nowVersion)
        r.next(false)
        r.complete()
      }else{
        r.next(true)
        r.complete();
      }
    })
  }

  addVersion(){
    let version = store.get('version');
    version = Number(version)
    version = version + 1;
    this.core.post('setting.save',{code: 'version',data: {version: version}}).subscribe(res=>{})
  }

  getRole(){
    this.checkVersion().subscribe(res=>{
      if(res){
        let data = store.get('runner.my.getrole')
        if(data){
          let info = data;
          this.isRunner = info.isRunner;
          this.isAdmin = info.isAdmin;
          this.isManager = info.isManager;
          this.oauth_code = info.oauth_code;
        }else{
          this.getOnlineRole()
        }
      }else{
        this.getOnlineRole()
      }
    })

  }

  getOnlineRole(){
    this.core.post('paylog.wxconfig',{code: 'getrole'}).subscribe(res=>{
      let info = res.info;
      store.set('runner.my.getrole',info)
      this.isRunner = info.isRunner;
      this.isAdmin = info.isAdmin;
      this.isManager = info.isManager;
      this.oauth_code = info.oauth_code;
    })
  }

  showFooter(){
    this.showMainFooter = true;
    store.set('showMainFooter',true)
  }

  hideFooter(){
    this.showMainFooter = false;
    store.set('showMainFooter',false)
  }

  showAdmin(){
    if(this.isAdmin || this.isManager){
      this.edit = true;
      store.set('edit',true)
    }else{
      toast('对不起权限不足');
    }
  }

  hideAdmin(){
    if(this.isAdmin || this.isManager){
      this.edit = false;
      store.set('edit',false)
    }else{
      toast('对不起权限不足');
    }
  }

  tabAdmin(){
    this.edit = !this.edit;
  }

  editOpt(item: any){
    item.link && this.router.navigate(item.link)
  }

  getFooterSetting(){

  }

  saveFooterSetting(){

  }

  guid() {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
      return v.toString(16);
    });
  }

  formatDateTime (date: any) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    var minute = date.getMinutes();
    minute = minute < 10 ? ('0' + minute) : minute;
    var second = date.getSeconds();
    return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second ;
  }

  checkRealName(name: string) {
    // 收货人姓名校验(准则:姓名为2-4汉字)
    var regu = /^[\u4E00-\u9FA5]{2,4}$/;
    var re = new RegExp(regu);
    if (!re.test(name)) {
      return false;
    }
    return true;
  }
  checkMobile(cellPhone: string){
    let regu =  /^[S|U]((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,2,3,5-9]))\d{8}$/;
    let re = new RegExp(regu);
    if (!re.test(cellPhone)) {
      return false;
    }
    return true;
  }


  isEmpty(str: any){
    if (str == undefined || str == null || str == "") {
      return true;
    }
    return false;
  }

  refresh() {
    this.showMainFooter = store.get('showMainFooter');
    if(this.showMainFooter == undefined){
      this.showMainFooter = true;
    }
    this.edit = store.get('edit')
    if(this.edit == undefined){
      this.edit = false;
    }
  }
}
