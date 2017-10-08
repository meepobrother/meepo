import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarfilesService, CloudService} from "services-components";
import {Router} from "@angular/router";

@Component({
  selector: 'suyun-repair-post',
  templateUrl: './repair-post.component.html',
  styleUrls: ['./repair-post.component.scss']
})
export class RepairPostComponent implements OnInit {
  items: any[] = []
  advs: any[] = []
  orders: any[] = []
  constructor(
    public cloud: CloudService,
    public router: Router,
    public carfiles: CarfilesService
  ) {
    this.items = [
      {
        title: '汽车清洗',
        icon: '../addons/imeepos_runner/template/mobile/assets/images/repair-xiche.png',
        link: ['/repair/xiche/0']
      },
      {
        title: '保养美容',
        icon: '../addons/imeepos_runner/template/mobile/assets/images/repair-meirong.png',
        link: ['/repair/meirong/0']
      },
      {
        title: '汽车维修',
        icon: '../addons/imeepos_runner/template/mobile/assets/images/repair-weixiu.png',
        link: ['/repair/weixiu/0']
      }
    ]
    this.advs = [
      {
        image: '../addons/imeepos_runner/template/mobile/assets/images/adv.jpg',
        link: []
      }
    ]
  }

  ngOnInit() {

  }
  total: number = 0;
  @Output() onUpload: EventEmitter<any> = new EventEmitter()

  debug: boolean = true;
  scanQrCode(){
    if(this.debug){
      let car_num: string = '鲁a686ej';
      this.carfiles.get({car_num: car_num}).subscribe(res=>{
        if(res.code ==  1){
          this.router.navigate(['/','repair','weixiu',res.info['id']])
        }
      })
    }
    let wx = window['wx'];
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res)=>{
        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        wx.uploadImage({
          localId: localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
          isShowProgressTips: 1, // 默认为1，显示进度提示
          success: (res)=>{
            var serverId = res.serverId; // 返回图片的服务器端ID
            this.cloud.getCarfiles({serverId: serverId}).subscribe(res=>{
              //获取汽车信息 跳转到选择项目页
              this.router.navigate(['/','repair','weixiu',res.info])
            })
          }
        });
      }
    });
  }

}
