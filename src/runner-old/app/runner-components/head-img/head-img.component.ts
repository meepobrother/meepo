import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'head-img',
  templateUrl: './head-img.component.html',
  styleUrls: ['./head-img.component.scss']
})
export class HeadImgComponent implements OnInit {
  bgImg: string = window['module_url'] + 'assets/images/bg/bg-red.png'

  @Input() info: any = {};
  @Input() items: any[] = []

  @Output() onItem: EventEmitter<any> = new EventEmitter()
  constructor(
      public router: Router
  ) {
    this.items = [
      {
        title: '我的帖子',
        num: 0,
        link: ['/bbs/my-topic']
      },
      {
        title: '我的服务',
        num: 0,
        link: ['/services/my-service']
      },
      {
        title: '我的问答',
        num: 0,
        link: ['/asks/my-question']
      }
    ]
  }

  ngOnInit() {
    this.info['avatar'] = this.info['avatar'] ? this.info['avatar'] : window['module_url']+'assets/images/home/newDefaul.png'
    this.info['nickname'] = this.info['nickname'] ? this.info['nickname'] : '游客'
    this.info['tag'] = this.info['tag'] ? this.info['tag'] : '普通粉丝'
    this.info['desc'] = this.info['desc'] ? this.info['desc'] : '实名认证';
    this.info['mobile'] = this.info['mobile'] ? this.info['mobile'] : '';
  }

  onAccount(){

  }

  check(){
    this.onItem.emit('on item')
  }

}
