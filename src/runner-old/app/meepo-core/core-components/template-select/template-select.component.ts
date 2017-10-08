import {Component, EventEmitter, HostBinding, OnInit, Output} from '@angular/core';
import {CoreUtilService} from "../../core-util.service";

@Component({
  selector: 'template-select',
  templateUrl: './template-select.component.html',
  styleUrls: ['./template-select.component.scss']
})
export class TemplateSelectComponent implements OnInit {
  items: any[] = []
  rightIn: any;
  @Output() onClose: EventEmitter<any> = new EventEmitter()

  constructor(
      public core: CoreUtilService
  ) {
    this.items = [
      {
        title: '主页模板',
        code: 'index',
        active: true,
        items: [
          {
            title: '仿京东-个人中心',
            image: window['module_url']+'assets/images/core/home-jingdong.png',
            has: true,
            price: 30
          }
        ]
      },
      {
        title: '个人中心',
        code: 'home',
        items: [
          {
            title: '仿京东-个人中心',
            image: window['module_url']+'assets/images/core/home-jingdong.png',
            has: true,
            price: 30
          },
          {
            title: '仿京东-个人中心',
            image: window['module_url']+'assets/images/core/home-jingdong.png',
            has: true,
            price: 30
          }
        ]
      },
      {
        title: '发布模板',
        code: 'post',
        items: [
          {
            title: '仿京东-个人中心',
            image: window['module_url']+'assets/images/core/home-jingdong.png',
            has: true,
            price: 30
          }
        ]
      }
    ]
  }
  activeItem: any = {};
  onSelect(e: any){
    this.activeItem = e;
  }

  ngOnInit() {
    this.items.map(res=>{
      if(res){
        this.activeItem = res;
      }
    })
  }

  close(){
    this.onClose.emit('close')
  }

  onItem(e: any){
    e.showOpt = true;
  }
  //预览
  preview(e: any){

  }
  //购买
  buy(e: any){

  }
  //使用
  use(e: any){

  }

}
