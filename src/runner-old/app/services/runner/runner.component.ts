import { Component, OnInit } from '@angular/core';
import {RunnerService} from "services-components";
import {RunnerUtilService} from "../../runner-components/runner-util.service";

declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
import {Router} from "@angular/router";

@Component({
  selector: 'suyun-runner',
  templateUrl: './runner.component.html',
  styleUrls: ['./runner.component.scss']
})
export class RunnerComponent implements OnInit {
  runners: any[] = [];
  key: string = '';

  constructor(
    public runner: RunnerService,
    public util: RunnerUtilService,
    public router: Router
  ) {}
  showInput: boolean = false;
  onInput(){
    this.showInput = true;
  }
  loading: boolean = false;
  ngOnInit() {
    setTimeout(()=>{
      if( this.util.isManager || this.util.isAdmin){
        this.navs = [
          {
            title: '跑腿列表',
            active: true,
            code: 'runner'
          },
          {
            title: '跑腿审核',
            active: false,
            code: 'runner.check'
          },
          {
            title: '小黑屋',
            active: false,
            code: 'runner.forbid'
          }
        ]
        this.init(0)
      }else{
        this.init(0)
      }
    },300)

    window.onscroll = (evt)=>{
      this.loading ? '' : this.onscroll(evt)
    }
  }

  navs: any[] = [];
  activeTab: any = {
    title: '跑腿列表',
    active: true,
    code: 'runner'
  };

  search(){
    this.onItem(this.activeTab)
  }
  onChange(e: any){
    this.onItem(this.activeTab)
  }

  onItem(item: any,isInit:boolean = true){
    let start = 0;
    if(isInit){
      start = 0;
    }else{
      start = this.runners.length
    }
    if(!this.loading){
      this.loading = true;
      if(item.code == 'runner'){
        this.init(start)
      }else if(item.code == 'runner.forbid'){
        this.getForbid(start)
      }else{
        this.getStatus0(start)
      }
    }

    this.activeTab = item;
  }

  getForbid(start: number){
    this.runner.getHots({start: start,len: 20,forbid: 1,key: this.key}).subscribe(res=>{
      if(start > 0){
        this.runners = this.runners.concat(res.info)
      }else{
        this.runners = res.info;
      }
      if(res.code == 1){
        this.loading = false;
      }

    })
  }


  getStatus0(start: number){
    this.runner.getHots({start: start,len: 20,status: 0,key: this.key}).subscribe(res=>{
      if(start > 0){
        this.runners = this.runners.concat(res.info)
      }else{
        this.runners = res.info;
      }
      if(res.code == 1){
        this.loading = false;
      }
    })
  }
  makeSure(){
    //通过
    this.runner.getHots({code: 'check',id: this.showItem.id,start: 0,len: 20,status: 0,key: this.key}).subscribe(res=>{
      this.runners = res.info;
      weui.toast('操作成功');
      this.cancel()
    })
  }

  makeFail(item: any){
    this.runner.getHots({code: 'fail',id: this.showItem.id,start: 0,len: 20,status: 1}).subscribe(res=>{
      weui.toast('操作成功');
      this.onItem(this.activeTab)
      this.cancel()
    })
  }
  cancel(){
    this.showProfile = false;
  }
  previewImage(){
    let wx = window['wx'];
    wx.previewImage({
      current: this.showItem['card_image1'], // 当前显示图片的http链接
      urls: [this.showItem['card_image1'],this.showItem['card_image2']] // 需要预览的图片http链接列表
    });
  }
  showProfile: boolean = false;
  showItem: any = {};
  showIndex: number = 0;
  option(item: any,index: number){
    if(this.util.isManager || this.util.isAdmin){
      let option = []
      if(item.status == 0){
        option.push({
          label: '审查资料',
          onClick: ()=> {
            this.showProfile = true;
            this.showItem = item;
            this.showIndex = index;
          }
        })
      }else if(item.forbid == 1){
        option.push({
          label: '审查资料',
          onClick: ()=> {
            this.showProfile = true;
            this.showItem = item;
            this.showIndex = index;
          }
        })
        option.push({
          label: '解除封禁',
          onClick: ()=> {
            this.runner.getHots({code: 'unforbid',id: item.id,start: 0,len: 20,status: 1}).subscribe(res=>{
              weui.toast('操作成功');
              this.onItem(this.activeTab)
            })
          }
        })
      }else{
        option.push({
          label: '审查资料',
          onClick: ()=> {
            this.showProfile = true;
            this.showItem = item;
            this.showIndex = index;
          }
        })
        option.push({
          label: '禁止接单',
          onClick: ()=>{
            this.runner.getHots({code: 'uncheck',id: item.id,start: 0,len: 20,status: 1}).subscribe(res=>{
              this.onItem(this.activeTab)
              weui.toast('操作成功');
            })
          }
        })
      }
      weui.actionSheet(option, [
        {
          label: '取消',
          onClick: function () {
            console.log('取消');
          }
        }
      ], {
        className: 'custom-classname'
      });
    }
    else{
      // this.router.navigate(['/services/shop/',item.id])
    }
  }

  init(start: number){
    this.runner.getHots({start: start,len: 20,key: this.key}).subscribe(res=>{
      if(start > 0){
        this.runners = this.runners.concat(res.info)
      }else{
        this.runners = res.info;
      }
      if(res.code == 1){
        this.loading = false;
      }
    })
  }

  onscroll(e){
    let innerHeight = window.innerHeight
    let scrollTop = document.body.scrollTop
    let scrollHeiht = document.body.scrollHeight
    if(scrollHeiht - innerHeight - scrollTop < 80){
      this.onItem(this.activeTab,false)
    }
  }

}
