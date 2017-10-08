import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CoreUtilService} from "../../core-util.service";

@Component({
  selector: 'core-tabbar',
  templateUrl: './core-tabbar.component.html',
  styleUrls: ['./core-tabbar.component.scss']
})
export class CoreTabbarComponent implements OnInit {
  @Input() items: any[] = []
  @Output() onSelect: EventEmitter<any> = new EventEmitter()
  _code: string = 'core.tabbar';
  showMore: boolean = false;
  @Input() set code(val: string){
    if(val){
      this._code = val;
      this.getByCode()
    }
  }

  _end: any;
  @Input()
  set end(val: any){
    this._end = val;
  }

  activeItem: any = {
    type: 'help'
  }

  constructor(
      public core: CoreUtilService
  ) {

  }
  modules: any[] = []
  ngOnInit() {

  }

  onTabbarSelect(e: any){
    this.activeItem = e;
  }

  getByCode(){
    this.core.post('setting.get',{code: this._code}).subscribe(res=>{
      if(res.code == 1){
        this.items = res.info;
      }else{
        this.items = this.items.concat([
          {
            title: '帮我送',
            code: 'song',
            type: 0
          },
          {
            title: '帮我买',
            code: 'buy',
            type: 2
          },
          {
            title: '帮帮忙',
            code: 'help',
            type: 4
          }
        ]);
      }
    })
  }

}
