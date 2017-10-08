import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";

@Component({
  selector: 'suyun-card-recharge',
  templateUrl: './card-recharge.component.html',
  styleUrls: ['./card-recharge.component.scss']
})
export class CardRechargeComponent implements OnInit {
  showSku: boolean = false;
  navs: any[] = []
  items: any[] = []
  skuItem: any = {}
  price: number = 0;
  constructor(
      public util: RunnerUtilService
  ) {
    this.navs = [
      {
        title: '热销',
        active: true,
        code: 'hots'
      }
    ]
    this.items = [
      {
        title: '测试积分的兑换',
        price: '10',
        image: window['module_url']+'./assets/images/shop/01.jpg',
        total: 200,
        limit: 20
      }
    ]
  }

  ngOnInit() {
    this.util.showFooter()
  }
  charts: any[] = [];
  tid: string = '';
  onAdd(e: any){
    e['num'] = e['num'] || 1;
    this.showSku = true;
    this.skuItem = e;
    this.tid = this.util.guid();
  }

  onClose(){
    this.showSku = false
  }

  checkExist(e: any){
    let has = false;
    this.charts.map(res=>{
      if(e.title == res.title){
        has = true;
        res.num ++;
      }
    })
    if(!has){
      this.charts.push(e)
    }
  }

  addToCart(e: any){
    this.showSku = false;
    this.checkExist(e)
    this.util.hideFooter()
    this.buyNow()
  }

  tip: string = '请选择要兑换的商品';
  buyNow(){
    this.tip = "";
    this.showSku = false;
    this.price = 0;
    this.charts.map(res=>{
      this.price += Number(res.price) * res.num;
      this.tip += "["+res.title+"]("+res.num+'个)';
    })
  }

}
