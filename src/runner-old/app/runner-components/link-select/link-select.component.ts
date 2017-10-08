import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CoreUtilService } from '../../meepo-core/core-util.service';

@Component({
  selector: 'suyun-link-select',
  templateUrl: './link-select.component.html',
  styleUrls: ['./link-select.component.scss']
})
export class LinkSelectComponent implements OnInit {
  items: any[] = []

  @Output() onSelect: EventEmitter<any> = new EventEmitter()
  constructor(
    public core: CoreUtilService
  ) {
    this.items = [
      {
        title: '首页',
        link: ['/core/index']
      },
      {
        title: '发布',
        link: ['/core/post']
      },
      {
        title: '我的',
        link: ['/core/home']
      },
      {
        title: '地图',
        link: ['/core/map']
      },
      {
        title: '我的订单',
        link: ['/runner/my-order']
      },
      {
        title: '我的任务',
        link: ['/runner/my-recive']
      }
    ]
  }

  select(item: any){
    this.onSelect.emit(item)
  }

  ngOnInit() {
    this.core.post('setting.get',{code: 'imeepos_runner_plugin_im'}).subscribe(res=>{
      if(res.code == 1){
        this.items.push({
          title: 'IM',
          link: ['/im/index']
        })
      }
    })
  }

  init(){
    // this.global.getLink({}).subscribe(res=>{
    //   console.log(res)
    // })
  }

}
