import { Component, OnInit } from '@angular/core';
import {MemberService} from "services-components";

@Component({
  selector: 'suyun-mredpack-post',
  templateUrl: './mredpack-post.component.html',
  styleUrls: ['./mredpack-post.component.scss']
})
export class MredpackPostComponent implements OnInit {
  myinfo: any = {}
  constructor(
      public member: MemberService
  ) { }

  ngOnInit() {
    this.member.info({}).subscribe(res=>{
      this.myinfo = res.info;
    })
  }

}
