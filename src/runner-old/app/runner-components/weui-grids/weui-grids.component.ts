import {Component, Input, OnInit} from '@angular/core';

import {RunnerUtilService} from "../runner-util.service";
import { CoreUtilService } from '../../meepo-core/core-util.service';

@Component({
  selector: 'weui-grids',
  templateUrl: './weui-grids.component.html',
  styleUrls: ['./weui-grids.component.scss']
})
export class WeuiGridsComponent implements OnInit {
  @Input() items: any[] = []
  @Input() code: string = 'setting.post.index.grids';
  constructor(
    public core: CoreUtilService,
    public util: RunnerUtilService
  ) {
    this.items = []
  }
  showList: boolean = false;
  onList(){
    this.showList = true;
  }
  cancelList(){
    this.showList = false;
  }

  showEdit: boolean = false;
  onEdit(item: any,index: number){
    item.active = !item.active
    if(item.active){
      item['tag'] = '开启';
    }else{
      item['tag'] = '关闭';
    }
    this.save();
  }

  save(){
    this.core.post('setting.save',{code: this.code, data: this.items}).subscribe(res => {
      // weui.toast('保存成功')
    });
  }

  get(){
    this.core.post('setting.get',{code: this.code}).subscribe(res => {
      if (res.code == 0) {
        this.core.post('setting.save',{code: 'setting.post.index.grids', data: this.items}).subscribe(res => {})
      } else {
        this.items = res.info;
      }
    });
  }

  ngOnInit() {
     this.get();
  }

}
