import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
@Component({
  selector: 'suyun-setting-time',
  templateUrl: './setting-time.component.html',
  styleUrls: ['./setting-time.component.scss']
})
export class SettingTimeComponent implements OnInit {
  @Input() post: any = {}
  @Output() onSave: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  addTime(){
    this.post['timeItems'] = this.post['timeItems'] || []
    let item = {
      start: '8:00',
      end: '12:00',
      price: '10'
    }
    this.post['timeItems'].push(item)
  }

  showTimeEdit: boolean = false;
  timeEditItem: any = {};
  timeEditIndex: number = 0;
  moreTime(item: any,index: number){
    actionSheet([
      {
        label: '编辑',
        onClick: ()=>{
          this.showTimeEdit = true;
          this.timeEditItem = item
          this.timeEditIndex = index
        }
      }, {
        label: '删除',
        onClick: ()=>{
          this.post['timeItems'].splice(index,1)
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
    this.showTimeEdit = false;
  }

  save(){
    this.post['timeItems'][this.timeEditIndex] = this.timeEditItem
    this.onSave.emit(this.post)
    this.showTimeEdit = false
  }

}
