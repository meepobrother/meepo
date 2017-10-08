import {Component, Input, OnInit} from '@angular/core';


const defaultProps = {
  logo: window['module_url']+'assets/wepayui/img/wepay_logo_default_white_500x126.png',
  code: '',
  tip: '扫码付款',
  footer: '杭州米波网络科技有限公司提供技术支持'
}
@Component({
  selector: 'pay-scan-code',
  templateUrl: './pay-scan-code.component.html',
  styleUrls: ['./pay-scan-code.component.scss']
})
export class PayScanCodeComponent implements OnInit {

  _props: any = {}

  @Input()
  set props(val: any){
    this._props = val;
    this._props = Object.assign(defaultProps,this._props)
  }
  constructor() { }

  ngOnInit() {
    this._props = Object.assign(defaultProps,this._props)
  }

}
