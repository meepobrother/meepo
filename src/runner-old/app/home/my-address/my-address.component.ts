import { Component, OnInit } from '@angular/core';

import {AddressService} from 'services-components';

declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
import {Router} from "@angular/router";
import {RunnerUtilService} from "../../runner-components/runner-util.service";

@Component({
  selector: 'suyun-my-address',
  templateUrl: './my-address.component.html',
  styleUrls: ['./my-address.component.scss']
})
export class MyAddressComponent implements OnInit {
  items: any[] = []
  constructor(
    public util: RunnerUtilService,
    public address: AddressService,
    public router: Router
  ) {
    this.items = []
  }

  loading: boolean = false;
  ngOnInit() {
    this.util.hideFooter()
    this.search({start: 0,len: 10,op: 'my'})
    window.onscroll = (evt)=>{
      this.loading ? '' : this.onscroll(evt)
    }
  }

  search(item: any){
    this.loading = true;
    item['start'] = this.items.length;
    this.address.search(item).subscribe(res=>{
      item['start'] > 0 ? this.items.concat(res.info) : this.items = res.info;
      this.loading = false;
    })
  }

  add(){
    this.router.navigate(['/address/add'])
  }

  onscroll(e){
    let innerHeight = window.innerHeight
    let scrollTop = document.body.scrollTop
    let scrollHeiht = document.body.scrollHeight
    if(scrollHeiht - innerHeight - scrollTop < 80){
      this.search({})
    }
  }

  op(item: any,index: number){
    weui.actionSheet([
      {
        label: '编辑',
        onClick: ()=>{
          this.router.navigate(['/','address','edit',item.id])
        }
      }, {
        label: '删除',
        onClick: ()=>{
          this.address.delete(item.id).subscribe(res=>{
            this.items.splice(index,1)
            weui.topTips('删除成功',3000)
          })
        }
      }
    ], [
      {
        label: '取消',
        onClick: ()=>{
          console.log('取消');
        }
      }
    ], {
      className: 'custom-classname'
    })
  }

}
