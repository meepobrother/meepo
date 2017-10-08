import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

import {RunnerUtilService} from "../runner-util.service";
import {CoreUtilService} from "../../meepo-core/core-util.service";

@Component({
  selector: 'nx-tabbar',
  templateUrl: './nx-tabbar.component.html',
  styleUrls: ['./nx-tabbar.component.scss']
})
export class NxTabbarComponent implements OnInit {
  _items: any[] = []
  @Input()
  set items(val: any){
    if(val){
      this.width = 0;
      this.lineWidth = 0;
      this._items = val;
      let has = false;
      this._items.map(res=>{
        if(res['active']){
          this._onItem2(res,0)
          has = true;
        }else{
          res['active'] = false;
        }
      })
      // console.log('NxTabbarComponent',this._items)
      if(!has && this._items.length>0){
        this._items[0]['active'] = true;
        this._onItem2(this._items[0],0)
      }

    }
  }
  @Output() onSelect: EventEmitter<any> = new EventEmitter()

  _code: string = '';

  @Input()
  set code(val: string){
    if(val){
      this._code = val;
      // this.initConfig();
    }
  }

  initConfig(){
    this.core.post('setting.get',{code: this._code}).subscribe(res=>{
      if(res.code == 1){
        this._items = res.info;
      }
    })
  }

  @Input() showMore: boolean = false;
  
  constructor(
      public util: RunnerUtilService,
      public core: CoreUtilService
  ) {
    this._items = []
  }
  editItem: any;
  editIndex: number = 0;
  onEdit(item: any,index: number){
    this.editItem = item;
    this.showEditer = true;
    this.editIndex = index;
    this._items.map(res=>{
      res['active'] = false
    })
    item.active = true;
    this.lineWidth = 0;
    this.width = 0;
    this.getWidth()
    this.scroller.nativeElement.scrollLeft = this.totalWidth - this.scroller.nativeElement.clientWidth/2;
  }

  deleteEdit(){
    this._items.splice(this.editIndex,1);
    this.core.post('setting.save',{code: this._code,data: this._items}).subscribe(res=>{
      this.closeEditer()
    });
  }

  _onItem2(item,index: number){
    this._items.map(res=>{
      res['active'] = false
    })
    item.active = true;
    this.lineWidth = 0;
    this.width = 0;
    this.getWidth()
    this.showMore = false;
    this.onSelect.emit(item)
    this.scroller.nativeElement.scrollLeft = this.totalWidth - this.scroller.nativeElement.clientWidth/2;
  }


  width:number = 0;
  totalWidth: number = 0;
  lineWidth: number = 0;
  getWidth(){
    let has = false;
    this.width = 0;
    this.lineWidth = 0;
    this.totalWidth = 0;
    this._items.map(res=>{
      if(res.active){
        has = true;
        this.lineWidth = res.title.length+2;
      }else{
        if(!has){
          this.width += res.title.length + 2;
          this.totalWidth += (res.title.length + 2) * 15.3813;
        }
      }
    })
    this.totalWidth += 3 * 15.3813;
  }

  onMore(){
    this.showMore = !this.showMore;
  }

  ngOnInit() {
    this.getWidth();
  }

  @ViewChild('scroller') scroller: ElementRef

  select(item: any){
    console.log(item)
    this._items.map(res=>{
      res.active = false
    })
    item.active = true;
    this.onSelect.emit(item)
  }

  showEditer: boolean = false;
  openEditer(){
    this.showEditer = true;
  }
  closeEditer(){
    this.showEditer = false;
  }
  saveEditer(){
    this._items[this.editIndex] = this.editItem;
    this.core.post('setting.save',{code: this._code,data: this._items}).subscribe(res=>{
      this.closeEditer()
    });
  }

  add(){
    let item = {
      title: '测试',
      code: 'test',
      type: ''
    }
    this._items.push(item)
  }

}
