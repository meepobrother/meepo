import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-bonus',
  templateUrl: './card-bonus.component.html',
  styleUrls: ['./card-bonus.component.scss']
})
export class CardBonusComponent implements OnInit {
  items: any[] = []
  constructor() {
    this.items = [
      {
        title: '积分优惠',
        active: true,
        code: 'credit'
      },
      {
        title: '折扣优惠',
        active: true,
        code: 'discount'
      }
    ]
    this.onSelect(this.items);
  }
  showCredit: boolean = false;
  showDiscount: boolean = false;

  onSelect(e: any){
    this.items = e;

    this.items.map(res=>{
      if(res.code == 'credit'){
        if(res.active){
          this.showCredit = true;
        }else{
          this.showCredit = false
        }
      }
      if(res.code == 'discount'){
        if(res.active){
          this.showDiscount = true;
        }else{
          this.showDiscount = false;
        }
      }
    })
  }

  ngOnInit() {
  }

}
