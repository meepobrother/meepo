import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
@Component({
  selector: 'suyun-setting-tianqi',
  templateUrl: './setting-tianqi.component.html',
  styleUrls: ['./setting-tianqi.component.scss']
})
export class SettingTianqiComponent implements OnInit {
  showTianqiEdit: boolean = false;
  @Input() post: any = {}
  @Output() onSave: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  addTianqi(){
    this.post['tianqiItems'] = this.post['tianqiItems'] || []
    let item = {
      title: '雨天加价10元',
      price: '10'
    }
    this.post['tianqiItems'].push(item)
  }

  tianqiEditItem: any = {};
  tianqiEditIndex: number = 0;
  moreTianqi(item: any,index: number){
    actionSheet([
      {
        label: '编辑',
        onClick: ()=>{
          this.showTianqiEdit = true
          this.tianqiEditItem = item;
          this.tianqiEditIndex = index
        }
      }, {
        label: '删除',
        onClick: ()=>{
          this.post['tianqiItems'].splice(index,1)
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
  }

  cancel(){
    this.showTianqiEdit = false;
  }

  save(){
    this.post['tianqiItems'][this.tianqiEditIndex] = this.tianqiEditItem
    this.onSave.emit(this.post)
    this.showTianqiEdit = false
  }
}
