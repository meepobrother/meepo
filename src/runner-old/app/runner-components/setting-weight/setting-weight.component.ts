import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
@Component({
  selector: 'suyun-setting-weight',
  templateUrl: './setting-weight.component.html',
  styleUrls: ['./setting-weight.component.scss']
})
export class SettingWeightComponent implements OnInit {

  @Input() post: any = {}
  @Output() onSave: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  addJuli(){
    this.post['weightItems'] = this.post['weightItems'] || []
    let item = {
      start: '10',
      price: '10'
    }
    this.post['weightItems'].push(item)
  }


  showJuliEdit: boolean = false;
  juliEditItem: any = {};
  juliEditIndex: number = 0;
  moreJuli(item: any,index: number){
    actionSheet([
      {
        label: '编辑',
        onClick: ()=>{
          this.showJuliEdit = true;
          this.juliEditItem = item;
          this.juliEditIndex = index;
        }
      }, {
        label: '删除',
        onClick: ()=>{
          this.post['weightItems'].splice(index,1)
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
    this.showJuliEdit = false;
  }

  save(){
    this.post['weightItems'][this.juliEditIndex] = this.juliEditItem
    this.onSave.emit(this.post)
    this.showJuliEdit = false;
  }

}
