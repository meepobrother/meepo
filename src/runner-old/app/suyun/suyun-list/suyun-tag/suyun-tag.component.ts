import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;

import { CoreUtilService } from '../../../meepo-core/core-util.service';


@Component({
  selector: 'suyun-suyun-tag',
  templateUrl: './suyun-tag.component.html',
  styleUrls: ['./suyun-tag.component.scss']
})
export class SuyunTagComponent implements OnInit {

  @Input() items: any[] = []
  @Output() onSelect: EventEmitter<any> = new EventEmitter()

  @Input() title: string = '';
  constructor(
    public core: CoreUtilService
  ) {
    this.items = [
      {
        title: '个人搬家',
        active: true
      },
      {
        title: '货运服务'
      },
      {
        title: '长途搬家搬运'
      },
      {
        title: '公司搬家'
      },
      {
        title: '设备搬迁'
      },
      {
        title: '起重吊装'
      },
      {
        title: '钢琴搬运'
      },
      {
        title: '空调移机'
      },
      {
        title: '家具拆装'
      },
      {
        title: '行李托运'
      }
    ]
  }

  ngOnInit() {
    this.initConfig()
  }

  select(item: any){
    this.items.map(res=>{
      res.active = false
    })
    item.active = true;
    this.onSelect.emit(item)
  }

  initConfig(){
    this.core.post('setting.get',{code: 'suyun.setting.tag'}).subscribe(res=>{
      if(res.code == 0){
        this.core.post('setting.save',{code: 'suyun.setting.tag',data: this.items}).subscribe(res=>{

        })
      }else{
        this.items = res.info;
        this.items.map(res=>{
          if(res.title == this.title){
            this.select(res)
          }
        })
      }
    })
  }
  showDialog: boolean = false;
  open(){
    this.showDialog = true;
  }
  cancel(){
    this.showDialog = false;
  }
  showEdit: boolean = false;
  editItem: any = {};
  editIndex: number = 0;
  more(e: any,index: number){
    this.showEdit = !this.showEdit
    this.editItem = e;
    this.editIndex = index
  }

  cancelEdit(){
    this.showEdit = false;
  }

  saveEdit(){
    this.items[this.editIndex]= this.editItem
    this.cancelEdit()
  }

  default(){
    this.items.map(res=>{
      res.active = false
    })
    this.items[this.editIndex]['active'] = true;
  }

  add(){
    let item = {
      title: '标签'
    }
    this.items.push(item)
  }

  delete(){
    this.items.splice(this.editIndex,1)
    this.showEdit = false;
  }

  save(){
    this.core.post('setting.save',{code: 'suyun.setting.tag',data: this.items}).subscribe(res=>{
      weui.toast('保存成功');
      this.showDialog = false
    })
  }

}
