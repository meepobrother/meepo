import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'core-qrcode',
  templateUrl: './core-qrcode.component.html',
  styleUrls: ['./core-qrcode.component.scss']
})
export class CoreQrcodeComponent implements OnInit {
  @Input() text: string = '';
  @Input() width: number = 128;
  @Input() height: number = 128;

  @ViewChild('qrcode') qrcode: ElementRef
  constructor() { }

  ngOnInit() {
    this.init()
  }

  init(){
    window['requirejs']([
      window['module_url']+ "assets/bower_components/qrcodejs/qrcode.min.js"
    ],()=>{
      new window['QRCode'](this.qrcode.nativeElement, {
        text: this.text,
        width: this.width,
        height: this.height,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : window['QRCode'].CorrectLevel.H
      })
    });
  }
}
