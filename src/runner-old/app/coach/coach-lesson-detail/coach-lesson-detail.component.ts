import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {CoreUtilService} from "../../meepo-core/core-util.service";
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
@Component({
  selector: 'suyun-coach-lesson-detail',
  templateUrl: './coach-lesson-detail.component.html',
  styleUrls: ['./coach-lesson-detail.component.scss']
})
export class CoachLessonDetailComponent implements OnInit {
  @HostBinding('@routeState') routeState;
  detail: any = {}
  id: number = 0;
  tabs: any[] = [];

  post: any = {
    realname: '',
    mobile: '',
    lesson:0,
    type: 3,
    goods: ''
  }
  constructor(
      public route: ActivatedRoute,
      public util: RunnerUtilService,
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
      }
    ]
  }
  activeTabCode: string = 'coach'
  onItem(e: any){
    this.activeTabCode = e.code
  }
  day: string = '';
  ngOnInit() {
    this.route.params.subscribe(res=>{
      this.id = res.id;
      this.day = res.day;
      this.getDetail();
    })
    this.util.showFooter()
    this.getMyinfo();
  }
  getMyinfo(){
    this.core.post('member.info',{}).subscribe(res=>{
      if(res.code == 1){
        this.post['realname'] = res.info.realname;
        this.post['mobile'] = res.info.mobile;
      }
    })
  }

  onSuccess(e: any){
    this.post['mobile'] = e.mobile;
    this.post['code'] = e.code;
    this.post['code_id'] = e.code_id;
  }

  getDetail(){
    this.core.post('lesson.detail',{id: this.id},'imeepos_coach').subscribe(res=>{
      if(res.code == 1){
        this.detail = res.info;
        this.post['goods'] = this.detail.title;
        this.post['to_openid'] = this.detail.openid;
        this.post['other'] = this.detail.id;
        this.post['day'] = {
          value: this.day
        }
        this.post['time'] = {
          title: this.detail.start
        }
      }
    })
  }

  save(){
    this.post['lesson'] = this.id
    this.core.post('log.add',this.post,'imeepos_coach').subscribe(res=>{
      if(res.code == 1){
        this.showLoading = true;
        setTimeout(()=>{
          this.showLoading = false;
          this.router.navigate(['/coach/log'],{queryParams: {type: 3}})          
        },1000)
      }else{
        weui.toast(res.msg)
      }
    })
  }

  showLoading:boolean = false;
  loaddingProps: any = {
    toast: true,
    text: '恭喜您,预约成功!'
  }
}
