import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {MemberService} from "services-components";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'suyun-services-shop',
  templateUrl: './services-shop.component.html',
  styleUrls: ['./services-shop.component.scss']
})
export class ServicesShopComponent implements OnInit {
  id: number = 0;
  info: any = {}
  openid: string = '';

  constructor(
    public util: RunnerUtilService,
    public runner: MemberService,
    public route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(res=>{
      this.id = res.id;
      this.init()
    })
    this.util.hideFooter()
  }

  init(){
    this.runner.info({action: 'shop.info',id: this.id}).subscribe(res=>{
      this.info = res.info;
      this.openid = res.code;
    })
  }

}
