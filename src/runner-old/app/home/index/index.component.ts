import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {CoreUtilService} from "../../meepo-core/core-util.service";

@Component({
  selector: 'suyun-home-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  // @HostBinding('@routeState') routeState;
  tasks: any[] = [];
  grids: any[] = []

  shareIcon: string = window['module_url']+'assets/images/home/share.png'
  op: any = {}
  left: any = {
    label: ''
  }
  right: any = {}
  memberNavs: any = [
    {
      title: '余额',
      num: 0
    },
    {
      title: '积分',
      num: 0
    },
    {
      title: '信誉',
      num: 0
    }
  ]
  myinfo:any = {};

  constructor(
    public util: RunnerUtilService,
    public core: CoreUtilService,
    public router: Router,
    public route: ActivatedRoute
  ) {
    this.grids = [
      {
        title: '我的地址',
        icon: '../addons/imeepos_runner/template/mobile/assets/images/my-address.png',
        link: ['/home/my-address']
      }
    ]
  }

  phone: string = '13140415408';
  ngOnInit() {
    this.route.data.subscribe(res=>{
      let data = res.data;
      data.grids.subscribe(res=>{
        this.grids = res;
        this.grids.map(r=>{
          r.icon = window['module_url'] + r.icon;
        })
      })
      data.info.subscribe(res=>{
        this.myinfo = res;
        if(this.myinfo['isrunner'] == 1){
          this.myinfo['desc'] = this.myinfo['status'] == 1 ? '已实名认证,点击充值信誉' : '重新认证';
        }else{
          this.myinfo['desc'] = '立即去实名认证';
        }
        this.op = {
          label: this.myinfo['isrunner'] == 1 ? '已通过实名认证' : '去实名认证'
        }
        this.memberNavs = [
          {
            title: '我的余额',
            num: this.myinfo.credit2 ? this.myinfo.credit2 : '0'
          },
          {
            title: '我的积分',
            num: this.myinfo.credit1 ? this.myinfo.credit1 : '0'
          },
          {
            title: '我的信誉',
            num: this.myinfo.xinyu ? this.myinfo.xinyu : '0'
          }
        ]
      })
    })
    this.util.showFooter()
    this.util.clearTimer();
  }

  onRight(){
    if(this.myinfo['isrunner'] == 1 && this.myinfo['status'] == 1){
      this.router.navigate(['/','home','xinyu-chong'])
    }else{
      this.router.navigate(['/','qq','vip','buy'])
    }
  }
  // 我的佣金
  onOption(){
    if(this.myinfo['isrunner'] == 1 && this.myinfo['status'] == 1){
      this.router.navigate(['/','home','my-money'])
    }else{
      this.router.navigate(['/','qq','vip','buy'])
    }
  }

}
