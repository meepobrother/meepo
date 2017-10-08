import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

const defaultProps = {
  title: '选择金额付款',
  desc: '支付金额给商户',
  tip: '',
  btn: '立即支付',
  items: [
    {
      title: '1元',
      active: true,
      money: 1
    },
    {
      title: '5元',
      active: false,
      money: 5
    },
    {
      title: '10元',
      active: false,
      money: 10
    },
    {
      title: '20元',
      active: false,
      money: 20
    }
  ]
}

@Component({
  selector: 'pay-select-money',
  templateUrl: './pay-select-money.component.html',
  styleUrls: ['./pay-select-money.component.scss']
})
export class PaySelectMoneyComponent implements OnInit {
  _props: any = {}

  @Input()
  set props(val: any){
    this._props = val;
    this._props = Object.assign(defaultProps,this._props)
  }

  @Input()
  set items(val: any[]){
    if(val){
      this._props['items'] = val;
      this._props['items'].map(res=>{
        if(res.active){
          this._onItem(res)
        }
      })
    }
  }

  @Output() onItem: EventEmitter<any> = new EventEmitter()
  @Output() onPay: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {
    this._props = Object.assign(defaultProps,this._props)
  }

  _onItem(item: any){
    this._props.items.map(res=>{
      res.active = false;
    })
    item.active = true;
    this.onItem.emit(item)
  }

  pay(){
    this.onPay.emit('pay')
  }

}
