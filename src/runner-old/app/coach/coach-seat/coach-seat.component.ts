import {Component, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {CoachSeatService, MemberService} from "services-components";
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {CoachLogService} from "services-components/src/app/coach-services/coach-log.service";
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
import {Router} from "@angular/router";
import {CoachSeatTimeTagComponent} from "../coach-list/coach-seat-time-tag/coach-seat-time-tag.component";
import {CoreUtilService} from "../../meepo-core/core-util.service";
import {routeAnim} from "../../meepo-core/core-animates/router.anim";
@Component({
  selector: 'suyun-coach-seat',
  templateUrl: './coach-seat.component.html',
  styleUrls: ['./coach-seat.component.scss'],
  animations: [
      routeAnim
  ]
})
export class CoachSeatComponent implements OnInit {
  @HostBinding('@routeState') routeState;
  advs: any[] = []
  navs: any[] = [];

  activeNav: any = {}
  post: any = {
    type: 1, //器材预约
  }
  constructor(
    public seat: CoachSeatService,
    public util: RunnerUtilService,
    public ele: ElementRef,
    public render: Renderer2,
    public member: MemberService,
    public log: CoachLogService,
    public router: Router,
    public core: CoreUtilService
  ) {}
  showMobile: boolean = true;
  ngOnInit() {
    // this.loading.setValue(true)
    this.render.setStyle(this.ele.nativeElement,'display','block');
    this.navs.map(res=>{
      if(res['active']){
        this.activeNav = res;
      }
    })
    this.util.showFooter()
    this.getList(0)
    this.core.get('member.info','imeepos_coach').subscribe(res=>{
      if(res['code'] == 1){
        if(res.info['mobile']){
          this.showMobile = false;
          this.post['mobile'] = res.info['mobile']
          this.post['realname'] = res.info['realname']
        }else{
          this.showMobile = true;
        }
      }
    })
  }

  onSuccess(e: any){
    this.post['mobile'] = e.mobile;
    this.post['code'] = e.code;
    this.post['code_id'] = e.code_id;
  }

  save(){
    this.log.add(this.post).subscribe(res=>{
      if(res.code == 1){
        weui.toast('恭喜您,预约成功')
        this.router.navigate(['/coach/log'])
      }else{
        weui.toast(res.msg)
      }
    })
  }

  ngOnDestroy(){

  }

  onItem(e: any){
    this.activeNav = e;
    this.post['goods'] = e.title;
  }
  seats: any[] = []

  @ViewChild('seatTime') seatTime: CoachSeatTimeTagComponent
  getList(start: number){

  }

  onSelectTime(e: any){
    //获取预约记录
    this.post['day'] = e;
    setTimeout(()=>{
      this.seatTime.initDisable(this.post['day'],this.post['seat'],this.post['goods'])
    },500)
  }

  onSelectTag(e: any){
    this.post['time'] = e;
  }

  onSelectSeat(e: any){
    this.post['seat'] = e;
    setTimeout(()=>{
      this.seatTime.initDisable(this.post['day'],this.post['seat'],this.post['goods'])
    },500)
  }

}
