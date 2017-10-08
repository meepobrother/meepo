import {Component, HostBinding, OnInit} from '@angular/core';
import {CoachTeacherService} from "services-components";
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
import {Router} from "@angular/router";
import {routeAnim} from "../../meepo-core/core-animates/router.anim";

@Component({
  selector: 'suyun-coach-teacher-join',
  templateUrl: './coach-teacher-join.component.html',
  styleUrls: ['./coach-teacher-join.component.scss'],
  animations: [
      routeAnim
  ]
})
export class CoachTeacherJoinComponent implements OnInit {
  @HostBinding('@routeState') routeState;
  post: any = {
    tag: '',
    realname: '',
    mobile: '',
    desc: '',
    images: [],
    total: 6,
    price: ''
  }
  constructor(
      public teacher: CoachTeacherService,
      public router: Router
  ) { }

  ngOnInit() {
  }

  onTagSelect(e: any){
    this.post['tag'] = e.title;
  }

  onSuccess(e: any){
    this.post['mobile'] = e.mobile;
    this.post['code'] = e.code;
    this.post['code_id'] = e.code_id;
  }
  check(){
    if(!this.post['mobile']){
      weui.toast('请填写手机号码');
      return false;
    }
    if(!this.post['code']){
      weui.toast('请填写手机验证码');
      return false;
    }
    if(!this.post['realname']){
      weui.toast('请填写姓名');
      return false;
    }
    if(!this.post['desc']){
      weui.toast('请简要描述一下自己');
      return false;
    }
    return true;
  }

  save(){
    this.teacher.add(this.post).subscribe(res=>{
      if(res.code == 1){
        this.router.navigate(['/coach/teacher-index'])
      }else{
        weui.toast(res.msg)
      }
    })
  }

}
