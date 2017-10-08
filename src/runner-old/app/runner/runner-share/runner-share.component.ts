import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";

@Component({
  selector: 'suyun-runner-share',
  templateUrl: './runner-share.component.html',
  styleUrls: ['./runner-share.component.scss']
})
export class RunnerShareComponent implements OnInit {
  config: any = {
    loginout: window['module_url'] + 'assets/images/invite-user/loginout.png',
    activity: window['module_url'] + 'assets/images/invite-user/activity.png',
    tips: window['module_url'] + 'assets/images/invite-user/tips.png',
    star: window['module_url'] + 'assets/images/invite-user/star.png',
    myReward: window['module_url'] + 'assets/images/invite-user/my-reward.png',
    amount: window['module_url'] + 'assets/images/invite-user/amount.png',
    price: window['module_url'] + 'assets/images/invite-user/price.png',
    botton: window['module_url'] + 'assets/images/invite-user/botton.png'
  }
  constructor(
    public util: RunnerUtilService
  ) { }

  ngOnInit() {
    this.util.hideFooter()
  }

}
