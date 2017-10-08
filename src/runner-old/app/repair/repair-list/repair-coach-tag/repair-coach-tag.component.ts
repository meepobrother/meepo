import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SettingService} from "services-components";
import weui from 'weui.js'

@Component({
  selector: 'suyun-repair-coach-tag',
  templateUrl: './repair-coach-tag.component.html',
  styleUrls: ['./repair-coach-tag.component.scss']
})
export class RepairCoachTagComponent implements OnInit {

  @Input() items: any[] = []
  @Output() onSelect: EventEmitter<any> = new EventEmitter()

  @Input() title: string = '';

  @Input() code: string = 'runner.setting.coach.tag';
  constructor(
    public setting: SettingService
  ) {
    this.items = [
      {
        title: '预约洗车',
        active: true
      },
      {
        title: '预约维修'
      },
      {
        title: '预约保养'
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
    this.setting.get({code: this.code}).subscribe(res=>{
      if(res.code == 0){
        this.setting.save({code: this.code,data: this.items}).subscribe(res=>{

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
    this.setting.save({code: this.code,data: this.items}).subscribe(res=>{
      weui.toast('保存成功');
      this.showDialog = false
    })
  }

}
