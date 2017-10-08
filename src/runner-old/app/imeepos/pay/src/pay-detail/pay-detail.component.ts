import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
interface PayDetailItem{
  title?: string,
  desc?: string,
  money?: string
}
interface PayDetailProps{
  title?: string,
  total?: string,
  style?: string,
  subHeaders?: PayDetailTitle[],
  items?: PayDetailItem[],
  footer?: PayDetailItem[],
  haspay?: boolean
}

interface PayDetailTitle{
  title?: string,
  width?: number,
  code?: string
}

const defaultProps = {
  title: '订单支付',
  total: '0.00',
  style: 'table',
  subHeaders: [
    {
      title: '标题1',
      width: 37
    },
    {
      title: '标题2',
      width: 48
    },
    {
      title: '标题3',
      width: 15
    }
  ],
  items: [],
  footer: [],
  haspay: false
}

@Component({
  selector: 'pay-detail',
  templateUrl: './pay-detail.component.html',
  styleUrls: ['./pay-detail.component.scss']
})
export class PayDetailComponent implements OnInit {
  _props: PayDetailProps = {} as PayDetailProps
  @Input()
  set props(val: any){
    this._props = Object.assign(defaultProps,this._props)
  }

  @Output() onPay: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
    this._props = Object.assign(defaultProps,this._props)
  }

  pay(){
    this.onPay.emit(this._props)
  }

}
