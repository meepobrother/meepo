import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import weui from 'weui.js'
import {SettingService} from "services-components";

@Component({
  selector: 'suyun-help-tag',
  templateUrl: './help-tag.component.html',
  styleUrls: ['./help-tag.component.scss']
})
export class HelpTagComponent implements OnInit {

  @Input() items: any[] = []
  @Output() onSelect: EventEmitter<any> = new EventEmitter()

  @Input() title: string = '';


  constructor(
    public setting: SettingService
  ) {
    this.items = [
      {
        title: '一般任务',
        active: true
      },
      {
        title: '帮排队',
      },
      {
        title: '帮上课'
      },
      {
        title: '发传单'
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
    this.setting.get({code: 'runner.setting.help.tag'}).subscribe(res=>{
      if(res.code == 0){
        this.setting.save({code: 'runner.setting.help.tag',data: this.items}).subscribe(res=>{

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

  delete(){
    this.items.splice(this.editIndex,1)
    this.showEdit = false;
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

  save(){
    this.setting.save({code: 'runner.setting.help.tag',data: this.items}).subscribe(res=>{
      weui.toast('保存成功');
      this.showDialog = false
    })
  }

}
