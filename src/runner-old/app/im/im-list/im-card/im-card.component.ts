import {Component, EventEmitter, OnInit, Output} from '@angular/core';
// import {MemberService} from "services-components";
import { CoreUtilService } from '../../../meepo-core/core-util.service';

@Component({
  selector: 'im-card',
  templateUrl: './im-card.component.html',
  styleUrls: ['./im-card.component.scss']
})
export class ImCardComponent implements OnInit {
  @Output() onCancel: EventEmitter<any> = new EventEmitter()
  @Output() onSure: EventEmitter<any> = new EventEmitter()
  constructor(
      public core: CoreUtilService
  ) { }
  myinfo: any = {}
  ngOnInit() {
    this.core.post('member.info',{}).subscribe(res=>{
      this.myinfo = res.info;
      this.post.data.realname = this.myinfo.realname;
      this.post.data.mobile = this.myinfo.mobile;
      this.post.data.avatar = this.myinfo.avatar;
      this.post.data.nickname = this.myinfo.nickname;
      this.post.data.openid = this.myinfo.openid;
    })
  }

  cancel(){
    this.onCancel.emit('cancel')
  }
  post: any = {
    type: 'card',
    data: {
      realname: '',
      mobile: '',
      avatar: '',
      nickname: '',
      openid: ''
    }
  }
  sure(){
    this.onSure.emit(this.post)
  }

}
