import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SettingService} from "services-components";
import weui from 'weui.js'

@Component({
  selector: 'suyun-km8-tag',
  templateUrl: './km8-tag.component.html',
  styleUrls: ['./km8-tag.component.scss']
})
export class Km8TagComponent implements OnInit {

  @Input() items: any[] = []
  @Output() onSelect: EventEmitter<any> = new EventEmitter()

  @Input() title: string = '';
  constructor(
    public setting: SettingService
  ) {
    this.items = [
      {
        title: '搬家服务',
        active: true
      },
      {
        title: '家政月嫂'
      },
      {
        title: '维修安装'
      },
      {
        title: '升级饰条'
      },
      {
        title: '发动机舱清洁'
      },
      {
        title: '内饰翻新/清洗'
      },
      {
        title: '打蜡/封釉/镀晶/镀膜'
      },
      {
        title: '其他'
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
    this.setting.get({code: 'km8.setting.tag'}).subscribe(res=>{
      if(res.code == 0){
        this.setting.save({code: 'km8.setting.tag',data: this.items}).subscribe(res=>{

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
    this.setting.save({code: 'km8.setting.tag',data: this.items}).subscribe(res=>{
      weui.toast('保存成功');
      this.showDialog = false
    })
  }

}
