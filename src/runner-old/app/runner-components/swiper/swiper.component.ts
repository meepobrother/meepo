import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'suyun-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit {
  @Input() images: any[] = []
  len: number = 0;
  constructor() {

  }

  ngOnInit() {
    if(!this.images){
      this.images = this.images || []
    }
    this.len = this.images.length;
    if(this.len>3){
      this.len = 3;
    }else{
      this.len = 3;
    }
  }

  preview(img: string){
    let wx = window['wx'];
    wx.previewImage({
      current: img, // 当前显示图片的http链接
      urls: this.images // 需要预览的图片http链接列表
    });
  }

}
