import {Component, HostBinding, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {CoachTeacherService, ImLogService, MemberService} from "services-components";
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
import {ImMessageListComponent} from "../../im/im-list/im-message-list/im-message-list.component";
import {CoachLogService} from "services-components/src/app/coach-services/coach-log.service";
import {CoachSeatTimeTagComponent} from "../coach-list/coach-seat-time-tag/coach-seat-time-tag.component";
import {CoreUtilService} from "../../meepo-core/core-util.service";
import {routeAnim} from "../../meepo-core/core-animates/router.anim";

declare const require;
let store = require('store');

@Component({
  selector: 'suyun-coach-teacher-detail',
  templateUrl: './coach-teacher-detail.component.html',
  styleUrls: ['./coach-teacher-detail.component.scss'],
  animations: [
      routeAnim
  ]
})
export class CoachTeacherDetailComponent implements OnInit {
  @HostBinding('@routeState') routeState;
  id: number = 0;
  tip: string = '请选择预约项目';
  info: any = {}
  tabs: any[] = []


  post: any = {
    time: {},
    day: {},
    mobile: '',
    realname: '',
    price: 0.00,
    type: 2,
    action: 'coach.teacher'
  }


  constructor(
      public route: ActivatedRoute,
      public util: RunnerUtilService,
      public teacher: CoachTeacherService,
      public log: ImLogService,
      public member: MemberService,
      public coachLog: CoachLogService,
      public router: Router,
      public core: CoreUtilService
  ) {
    this.tabs = [
      {
        title: '预约',
        active: true,
        code: 'coach'
      },
      {
        title: '详情',
        code: 'detail'
      },
      {
        title: '咨询',
        code: 'rate'
      }
    ]
    this.tabs.map(res=>{
      if(res['active']){
        this.activeItem = res;
      }
    })
  }

  ngOnInit() {
    this.route.params.subscribe(res=>{
      this.id = res.id;
      this.code = 'myteacher.time.'+this.id;
      this.getDetail()
    })

    this.util.hideFooter()
  }

  showMobile: boolean = false;
  //IM
  toOpenid: string = 'fromUser';
  openid: string = window['openid'];
  @ViewChild('imlist') imList: ImMessageListComponent
  items: any[] = [];
  onInit(e: any){
    let items = store.get('my.message'+this.toOpenid);
    items = items || [];
    this.items = items;
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
    this.log.post(item).subscribe(res=>{})
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
    setTimeout(()=>{
      document.body.scrollTop = document.body.scrollHeight + 55;
    },300)
  }
  myinfo: any;
  toinfo: any;
  //IM

  code: string = '';
  @ViewChild('timeTag') timeTag: CoachSeatTimeTagComponent
  onDaySelect(e: any){
    this.code = 'myteacher.time.'+this.id;
    this.post['day'] = e;
    this.post['goods'] = this.code;
    this.initTip()
    setTimeout(()=>{
      this.timeTag.initDisable(this.post['day'],this.post['seat'],this.post['goods'])
    },1000)
  }
  onTimeSelect(e: any){
    this.post['time']= e;
    this.initTip()
  }

  initTip(){
    if(this.post['time']['title']){
      this.tip = '预约时间: '+ this.post['day']['title'] + ' ' +this.post['time']['title']+'';
    }else{
      this.tip = '请选择预约时间';
    }
  }

  activeItem: any = {}
  onItem(item: any){
    this.activeItem = item;
  }
  showPay: boolean = false;
  onPay(){
    this.post['goods'] = this.code;
    this.showPay = false;
    setTimeout(()=>{
      this.showPay = true;
    },500)

  }

  onPaySuccess(){
    this.router.navigate(['/coach/log'])
  }

  onSuccess(e: any){
    this.post['mobile'] = e.mobile;
    this.post['code'] = e.code;
    this.post['code_id'] = e.code_id;
  }

  getDetail(){
    this.teacher.detail({id: this.id}).subscribe(res=>{
      if(res.code == 1){
        this.info = res.info;
        this.toOpenid = this.info.openid || 'fromUser';
        this.post['to_openid'] = this.toOpenid;
        this.post['other'] = this.info.id;

        this.post['price'] = this.info['price']
        this.core.post('member.info',{openid: this.toOpenid,action: 'getInfo'},'imeepos_coach').subscribe(res=>{
          this.myinfo = res.info.myinfo;
          this.myinfo['openid'] = this.myinfo['openid'] || 'fromuser';
          this.myinfo['avatar'] = this.myinfo['avatar'] || '';
          this.myinfo['nickname'] = this.myinfo['nickname'] || '游客';
          this.myinfo['mobile'] = this.myinfo['mobile'] || '';
          this.myinfo['realname'] = this.myinfo['realname'] || '';
          if(this.myinfo['mobile']){
            this.showMobile = false;
          }else{
            this.showMobile = true;
          }
          this.post['mobile'] = this.myinfo['mobile'];
          this.post['realname'] = this.myinfo['realname'];
          this.toinfo = res.info.toinfo;
        })
      }else{
        weui.toast(res.msg)
      }
    })
  }

}
