import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CoreUtilService } from '../../meepo-core/core-util.service';
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
@Component({
  selector: 'suyun-cloud-download',
  templateUrl: './cloud-download.component.html',
  styleUrls: ['./cloud-download.component.scss']
})
export class CloudDownloadComponent implements OnInit {
  items: any[] = []
  showDetail: boolean = false;
  constructor(
      public core: CoreUtilService,
      public router: Router
  ) {
    this.items = [
      {
        title: '小明跑腿',
        icon: window['module_url']+'assets/images/cloud/runner.jpg',
        module: 'imeepos_runner'
      },
      {
        title: '跑腿IM',
        icon: window['module_url']+'assets/images/cloud/im.png',
        module: 'imeepos_runner_plugin_im'
      },
      {
        title: '健身房预约-单店版',
        icon: window['module_url'] + 'assets/images/coach/icon.png',
        module: 'imeepos_coach'
      }
    ]
  }

  btnTitle: string = '请选择更新插件';

  ngOnInit() {
  }
  files: any[] = []
  tip: string = '';
  hasPay: boolean = true;
  activeItem: any = {}
  version: string = '1.0.0';

  showLoading: boolean = false;

  onItem(item: any){
    this.activeItem = item;
    this.showDetail = false;
    this.showLoading = true;
    this.core.post('cloud.oauth',{module: item.module,op: 'display'}).subscribe(res=>{
      if(res.code == 1){
        this.files = res.info.files;
        this.version = res.info.version;
        this.tip = res.msg;
        this.hasPay = true;
        this.showDetail = true;
      }else{
        this.tip = res.msg;
        this.hasPay = false;
        this.showDetail = true;
      }
      this.showLoading = false;
    })
  }

  pay(){
    this.router.navigate(['/cloud/index'])
  }
  nowFile: string = '暂无要更新文件';
  total: number = 0;
  download(){
    this.core.post('cloud.oauth',{op: 'download',module: this.activeItem.module}).subscribe(res=>{
      if(res.code == 1){
        this.total = res.info;
        this.nowFile = res.msg;
        this.download()
      }else if(res.code == 2){
        toast('更新成功')
      }else{
        toast(res.msg)
      }
    })
  }

}
