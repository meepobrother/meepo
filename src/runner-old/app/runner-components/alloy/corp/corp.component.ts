import {Component, Directive, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[alloy-corp],alloy-crop',
})
export class CorpComponent implements OnInit {
  @Input() src: string = './assets/1.jpg';
  @Input() width: number = 200;
  @Input() height: number = 200;

  @Input() ok: string = '确定';
  @Input() cancel: string = '取消';

  @Output() onOk: EventEmitter<any> = new EventEmitter()
  @Output() onCancel: EventEmitter<any> = new EventEmitter()

  @Input() circle: boolean = true;
  constructor() { }

  ngOnInit() {
    this.crop()
  }

  crop(){
    window['requirejs']([
      window['module_url']+"assets/bower_components/alloyfinger/alloy_finger.js",
      window['module_url']+"assets/bower_components/alloyfinger/transformjs/transform.js",
      window['module_url']+"assets/bower_components/alloyfinger/alloy_crop/alloy_crop.js"
    ],()=>{
      new window['AlloyCrop']({
        image_src: this.src,
        circle: this.circle,
        width: this.width,
        height: this.height,
        ok: (base64, canvas)=>{
          let data = {
            base64: base64,
            canvas: canvas
          }
          this.onOk.emit(data)
        },
        cancel: ()=>{
          this.onCancel.emit('cancel')
        },
        ok_text: this.ok,
        cancel_text: this.cancel
      });
    })
  }

}
