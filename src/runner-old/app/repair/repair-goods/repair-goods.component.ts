import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suyun-repair-goods',
  templateUrl: './repair-goods.component.html',
  styleUrls: ['./repair-goods.component.scss']
})
export class RepairGoodsComponent implements OnInit {
  items: any[] = []
  advs: any = [];

  goods: any[] = [];
  price: number = 0;
  constructor() {
    this.items = [
      {
        title: '热销',
        active: true
      },
      {
        title: '零食',
        active: false
      }
    ]
    this.advs = [
      {
        title:'测试广告',
        image: './assets/images/shop/chaoshi.jpg'
      }
    ]
  }

  ngOnInit() {
  }

  look(e: any){

  }

  showSku: boolean = false;
  skuItem: any = {}

  autoPrice(){
    this.price = 0;
    this.goods.map(res=>{
      this.price += res.price * res.num;
    })
  }

  onClose(){
    this.showSku = false;
  }

  addToCart(good: any){
    let has = false;
    let index: number = 0;
    this.goods.map((res,key)=>{
      if(good.title == res.title){
        has = true;
        index = key;
      }
    })
    if(has){
      this.goods[index] = good;
    }else{
      this.goods.push(good)
    }
    console.log(this.goods)
    this.onClose()
    this.autoPrice()
  }

  buyNow(good: any){

  }

  onAdd(e: any){
    e.num = e.num || 1;
    let has = false;
    let index: number = 0;
    this.goods.map((res,key)=>{
      if(e.title == res.title){
        has = true;
        index = key;
      }
    })
    if(has){
      this.skuItem = this.goods[index]
    }else{
      this.skuItem = e;
    }
    this.autoPrice()
    this.showSku = true;
  }
}
