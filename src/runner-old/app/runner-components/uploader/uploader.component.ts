import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {CoreUtilService} from "../../meepo-core/core-util.service";

@Component({
  selector: 'suyun-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  @Input() images: any = []
  @Input() title: string = '上传图片';
  @Input() total: number = 1;

  constructor(
    public core: CoreUtilService
  ) { }
  wx: any = window['wx'];
  @Output() onUpload: EventEmitter<any> = new EventEmitter()
  @Input() limit: number = 0;

  ngOnInit() {
    this.limit = Number(this.total) - this.images.length;
  }

  upload(){
    this.core.uploadImage(this.limit).subscribe(res=>{
      if(this.total == 1){
        this.images = res;
      }else{
        this.images.push(res)
        this.limit = this.total - this.images.length
      }
      this.onUpload.emit(this.images)
    })
  }


  itemIndex: number = 0;
  reUpload(index: number){
    this.itemIndex = index;
    this.core.uploadImage(1).subscribe(res=>{
      if(this.total == 1){
        this.images = res;
      }else{
        this.images[this.itemIndex] = res
        this.limit = this.total - this.images.length
      }
      this.onUpload.emit(this.images)
    })
  }

}
