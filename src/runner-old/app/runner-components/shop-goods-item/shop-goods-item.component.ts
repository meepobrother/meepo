import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;

import { CoreUtilService } from '../../meepo-core/core-util.service';
@Component({
  selector: 'suyun-shop-goods-item',
  templateUrl: './shop-goods-item.component.html',
  styleUrls: ['./shop-goods-item.component.scss']
})
export class ShopGoodsItemComponent implements OnInit {
  @Output() onItem: EventEmitter<any> = new EventEmitter()
  @Input() items: any[] = [];
  @Input() hasAdd: boolean = false;
  @Input() id: number = 0;

  post: any = {
    title: '',
    price: '',
    images: '',
    total: 1
  }

  constructor(
    public core: CoreUtilService
  ) { }

  ngOnInit() {
    this.refresh()
  }

  onUpload(e: any){
    this.post['images'] = e;
  }

  refresh(){
    this.core.post('member.info',{action: 'shop.info',id: this.id}).subscribe(res=>{
      this.items = res.info.services
      console.log(this.items  )
    })
  }
  postIndex: number = 0;
  _onItem(item: any,index: number){
    if(this.hasAdd){
      actionSheet([
        {
          label: '编辑',
          onClick: ()=>{
            this.post = item;
            this.postIndex = index;
            this.showAddItem = true;
          }
        }, {
          label: '删除',
          onClick: ()=>{
            this.core.post('services.add',{action : 'delete',id: item.id}).subscribe(res=>{
              this.refresh();
            })
          }
        }
      ], [
        {
          label: '取消',
          onClick: function () {
            console.log('取消');
          }
        }
      ], {
        className: 'custom-classname'
      });
    }else{
      this.onItem.emit(item)
    }
  }

  showAddItem: boolean = false;

  addItem(){
    this.post = {
      title: '',
      price: '',
      images: ''
    }
    this.showAddItem = true;
  }

  hideAddItem(){
    this.showAddItem = false;
  }

  save(){
    this.core.post('services.add',this.post).subscribe(res=>{
      toast('保存成功');
      this.showAddItem = false;
      this.refresh();
    })
  }

}
