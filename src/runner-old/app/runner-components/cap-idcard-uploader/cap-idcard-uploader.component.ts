import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CoreUtilService } from '../../meepo-core/core-util.service';

@Component({
  selector: 'suyun-cap-idcard-uploader',
  templateUrl: './cap-idcard-uploader.component.html',
  styleUrls: ['./cap-idcard-uploader.component.scss']
})
export class CapIdcardUploaderComponent implements OnInit {
  wx: any = window['wx']

  @Input() post: any = {
    card_image1: 'https://img.yzcdn.cn/public_files/2017/04/20/8ec9e38383e169c6add2375829bb8ade.png',
    card_image2: 'https://img.yzcdn.cn/public_files/2017/04/20/26c44efd46c3eb51971f617d82e87f3a.png'
  }

  @Output() onUpload: EventEmitter<any> = new EventEmitter()
  ngOnInit() {
    this.initUpload()
  }

  constructor(
    public core: CoreUtilService
  ){}

  localIds: any;
  upload(key: string){
    this.wx.ready(()=>{
      this.wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: (res)=>{
          this.localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
          this.wx.uploadImage({
            localId: this.localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success: (res)=>{
              var serverId = res.serverId; // 返回图片的服务器端ID
              this.core.post('audio.image',{serverId: serverId}).subscribe(res=>{
                this.post[key] = res.info;
                this.onUpload.emit(this.post)
              })
            }
          });
        }
      });
    })
  }

  doUpload(localId: string){

  }

  initUpload(){

  }

}
