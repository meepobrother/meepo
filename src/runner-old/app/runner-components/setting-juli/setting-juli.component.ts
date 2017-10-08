import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;

@Component({
  selector: 'suyun-setting-juli',
  templateUrl: './setting-juli.component.html',
  styleUrls: ['./setting-juli.component.scss']
})
export class SettingJuliComponent implements OnInit {
  @Input() post: any = {}
  @Output() onSave: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  addJuli(){
    this.post['juliItems'] = this.post['juliItems'] || []
    let item = {
      start: '10',
      price: '10'
    }
    this.post['juliItems'].push(item)
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
          this.post['juliItems'].splice(index,1)
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
    this.post['juliItems'][this.juliEditIndex] = this.juliEditItem
    this.onSave.emit(this.post)
    this.showJuliEdit = false;
  }

}
