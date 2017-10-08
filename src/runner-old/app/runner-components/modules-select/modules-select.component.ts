import {Component, EventEmitter, OnInit, Output} from '@angular/core';
// import {SettingService} from "services-components";
import { CoreUtilService } from '../../meepo-core/core-util.service';
@Component({
  selector: 'suyun-modules-select',
  templateUrl: './modules-select.component.html',
  styleUrls: ['./modules-select.component.scss']
})
export class ModulesSelectComponent implements OnInit {
  items: any[] = []

  @Output() onSelect: EventEmitter<any> = new EventEmitter()
  constructor(
    public core: CoreUtilService
  ) {
    this.items = [
      {
        title: '帮我买',
        code: 'buy'
      },
      {
        title: '帮我送',
        code: 'song'
      },
      {
        title: '帮帮忙',
        code: 'help'
      }
    ]
  }

  ngOnInit() {
  }

  init(){
    this.core.post('setting.get',{code: 'meepo.mine.modules'}).subscribe(res=>{
      if(res.code == 0){
        this.core.post('setting.post',{code: 'meepo.mine.modules',data: this.items}).subscribe(res=>{})
      }else{
        this.items = res.info;
      }
    });
  }

  select(item: any){
    this.items.map(res=>{
      res.on = false
    });
    item.on = true;
    this.onSelect.emit(item);
  }

}
