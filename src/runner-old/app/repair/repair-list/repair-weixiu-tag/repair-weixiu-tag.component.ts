// import { Component, OnInit } from '@angular/core';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SettingService} from "services-components";
import weui from 'weui.js'
@Component({
  selector: 'suyun-repair-weixiu-tag',
  templateUrl: './repair-weixiu-tag.component.html',
  styleUrls: ['./repair-weixiu-tag.component.scss']
})
export class RepairWeixiuTagComponent implements OnInit {

  @Input() items: any[] = []
  @Output() onSelect: EventEmitter<any> = new EventEmitter()

  @Input() title: string = '';
  constructor(
    public setting: SettingService
  ) {
    this.items = [
      {
        title: '四轮定位',
        active: true
      },
      {
        title: '轮胎拆卸'
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
    this.setting.get({code: 'repair.setting.weixiu.tag'}).subscribe(res=>{
      this.setting.save({code: 'repair.setting.weixiu.tag',data: this.items}).subscribe(res=>{

      })
      if(res.code == 0){
        this.setting.save({code: 'repair.setting.weixiu.tag',data: this.items}).subscribe(res=>{

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
    this.setting.save({code: 'repair.setting.weixiu.tag',data: this.items}).subscribe(res=>{
      this.showDialog = false
    })
  }

}
