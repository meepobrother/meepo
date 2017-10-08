import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { isPresent } from 'ionic-angular/util/util';
@Component({
  selector: 'pay-order',
  templateUrl: './pay-order.component.html',
  styleUrls: ['./pay-order.component.scss']
})
export class PayOrderComponent implements OnInit {
  @Input() tip: string = '';
  _price: number = 0.00;
  @Input() btnTitle: string = '提交';

  _isActive: boolean = false;
  @Input()
  set isActive(val: boolean){
    this._isActive = val;
  }
  get isActive(){
    return this._isActive;
  }

  @Input()
  set price(val: number){
    this._price = val;
    this.init();
  }
  @Output() onPay: EventEmitter<any> = new EventEmitter()
  @Output() onDetail: EventEmitter<any> = new EventEmitter()

  price1: string = '0';
  price2: string = '00';

  constructor() { }

  ngOnInit() {

  }

  init(){
    let priceArray = this._price.toString().split('.');
    this.price1 = priceArray[0]
    this.price2 = priceArray[1]
    this.price2 = this.price2 || '00'
  }

  _pay(){
    this.onPay.emit('pay');
  }

  detail(){
    this.onDetail.emit('detail')
  }

}
