import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
// import {AddressService} from "services-components";
import { CoreUtilService } from '../../meepo-core/core-util.service';
declare const require;
let store = require('store');

@Component({
  selector: 'suyun-address-select',
  templateUrl: './address-select.component.html',
  styleUrls: ['./address-select.component.scss']
})
export class AddressSelectComponent implements OnInit {
  show: any = {
    add: false
  }
  topNavs:any[] = []

  items: any[] = []
  @Output() onSelect: EventEmitter<any> = new EventEmitter()
  @Input() hasMember: boolean = false;
  constructor(
    public core: CoreUtilService
  ) {
    this.topNavs = [
      {
        title: '历史记录',
        active: false,
        code: 'history'
      },
      {
        title: '我的地址',
        active: false,
        code: 'myaddress'
      },
      {
        title: '添加地址',
        active: true,
        code: 'add'
      }
    ]
    let item = store.get('address.select')
    if(item){
      this.topNavs.map(res=>{
        res.active = false;
        if(res.code == item.code){
          res.active = true;
        }
      })
    }
    this.topNavs.map(res=>{
      if(res.active){
        this.onNav(res)
      }
    })
  }

  ngOnInit() {
    this.getMyaddress(0);
  }

  onNav(e: any){
    console.log(e);
    if(e.code == 'history'){
      this.hideAdd();
      this.getHistory()
    }
    if(e.code == 'myaddress'){
      this.hideAdd();
      this.getMyaddress(0)
    }
    if(e.code == 'add'){
      this.add()
    }
    store.set('address.select',e)
  }

  onSave(e: any){
    e.poiname && this.select(e);
  }

  getHistory(){
    this.items = store.get('myaddress')
    this.items = this.items || []
  }
  getMyaddress(start: number){
    this.core.post('address.search',{start: start,len: 20}).subscribe(res=>{
      this.items = res.info
    });
  }

  add(){
    this.show.add = true;
  }

  hideAdd(){
    this.show.add = false;
  }

  post(){

  }

  select(item: any){
    console.log(item)
    this.onSelect.emit(item)
  }

}
