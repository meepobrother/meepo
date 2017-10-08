import { Component, OnInit } from '@angular/core';
// import {MemberService, TixianLogService} from "services-components";
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
import {Router} from "@angular/router";
import {CoreUtilService} from "../../meepo-core/core-util.service";
import {RunnerUtilService} from "../../runner-components/runner-util.service";

@Component({
  selector: 'suyun-tixian-post',
  templateUrl: './tixian-post.component.html',
  styleUrls: ['./tixian-post.component.scss']
})
export class TixianPostComponent implements OnInit {
  info: any[]= [];
  itemsTap: any[]= [];
  post: any = {}
  showXinyu: boolean = false;


  props: any = {
    title: '请选择提现金额',
    desc: '提现成功后,直接到账微信钱包',
    btn: '立即提现'
  }
  constructor(
    public router: Router,
    public core: CoreUtilService,
    public util: RunnerUtilService
  ) {
    this.itemsTap = []
    this.itemsTap.map(res=>{
      if(res.active){
        this.post['tixian'] = res;
      }
    })
  }

  ngOnInit() {
    this.initInfo();

    this.core.post('setting.get',{code: 'setting.tixian.items'},'imeepos_runner').subscribe(res=>{
      if(res.code == 1){
        this.itemsTap = res.info;
      }
      console.log('itemsTap',this.itemsTap)
      console.log(res)
    })

  }

  initInfo(){
    this.core.post('member.info',{}).subscribe(res=>{
      this.info = res.info;
    })
  }

  save(){
    if(!this.post['tixian']){
      toast('请选择提现项目!')
      return '';
    }
    if(this.info['credit2'] < this.post['tixian'].value){
      toast('对不起,您的余额不足!')
      return '';
    }

    this.core.post('log.post',this.post,'imeepos_runner_plugin_tixian').subscribe(res=>{
      if(res.code == 0){
        toast(res.msg)
      }else{
        // weui.toast(res.msg)
        this.router.navigate(['/tixian/log'])
      }
    })
  }

  onItem(e: any){
    if(this.info['credit2'] < e.value){
      toast('对不起,您的余额不足!')
    }
    this.post['tixian'] = e;
  }

}
