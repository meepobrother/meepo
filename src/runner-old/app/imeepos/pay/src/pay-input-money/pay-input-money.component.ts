import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
interface PayInputMoneyProps{
  title?: string,
  desc?: string,
  tip?: string,
  placeholder?: string,
  haspay?: boolean
}

const defaultProps = {
  title: '付款金额(元)',
  desc: '最多可输入金额500元',
  tip: '支付金额给商户',
  placeholder: '请输入金额',
  haspay: true
}

@Component({
  selector: 'pay-input-money',
  templateUrl: './pay-input-money.component.html',
  styleUrls: ['./pay-input-money.component.scss']
})
export class PayInputMoneyComponent implements OnInit {

  _props: PayInputMoneyProps = {} as PayInputMoneyProps

  @Input()
  set props(val: any){
    this._props = val;
    this._props = Object.assign(defaultProps,this._props)
  }

  @Input() money: number = 0;

  @Output() onPay: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
    this._props = Object.assign(defaultProps,this._props)
  }

  pay(){
    this.onPay.emit(this._props)
  }
}
