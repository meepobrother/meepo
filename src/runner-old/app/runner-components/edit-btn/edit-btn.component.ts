import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RunnerUtilService} from "../runner-util.service";

@Component({
  selector: 'suyun-edit-btn',
  templateUrl: './edit-btn.component.html',
  styleUrls: ['./edit-btn.component.scss']
})
export class EditBtnComponent implements OnInit {
  @Input() link: any[] = []

  @Input() upload: boolean = false;
  @Input() index: number = 0;
  @Output() onUpload: EventEmitter<any> = new EventEmitter()
  @Output() onSuccess: EventEmitter<any> = new EventEmitter()
  @Output() onEditer: EventEmitter<any> = new EventEmitter()
  @Input() clickOnly: boolean = false;

  @Input() text: boolean = false;
  showText: boolean = false;

  @Input() fixed: boolean = false;
  @Input() str: string = '';
  constructor(
    public util: RunnerUtilService
  ) {

  }

  ngOnInit() {
    setTimeout(()=>{
      this.util.refresh()
    },300)
  }

  cancel(){
    this.showText = false;
  }

  sure(){
    this.onSuccess.emit(this.str);
    this.cancel();
  }

  _onClick(){
    if(this.upload){
      let wx = window['wx'];
      wx.ready(()=>{
        wx.chooseImage({
          count: 1, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: (res)=>{
            let localId = res.localIds[0];
            this.onUpload.emit({localId: localId,index: this.index})
          }
        });
      })
      return '';
    }
    if(this.text){
      console.log('text show');
      this.showText = true;
      return '';
    }
    this.onEditer.emit('on click');
    this.util.editOpt({link: this.link})
  }

}
