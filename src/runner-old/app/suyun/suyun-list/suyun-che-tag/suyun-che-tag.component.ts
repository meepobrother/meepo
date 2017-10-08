import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
import { CoreUtilService } from '../../../meepo-core/core-util.service';


@Component({
  selector: 'suyun-suyun-che-tag',
  templateUrl: './suyun-che-tag.component.html',
  styleUrls: ['./suyun-che-tag.component.scss']
})
export class SuyunCheTagComponent implements OnInit {

  @Input() items: any[] = []
  @Output() onSelect: EventEmitter<any> = new EventEmitter()

  @Input() title: string = '';
  constructor(
    public core: CoreUtilService
  ) {
    this.items = [
      {
        title: '小型面包',
        active: true,
        desc: '适合日常杂物搬运'
      },
      {
        title: '金杯',
        desc: '适合日常杂物搬运'
      },
      {
        title: '货箱',
        desc: '适合日常杂物搬运'
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
    this.core.post('setting.get',{code: 'suyun.setting.che.tag'}).subscribe(res=>{
      if(res.code == 0){
        this.core.post('setting.save',{code: 'suyun.setting.che.tag',data: this.items}).subscribe(res=>{

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
    this.core.post('setting.get',{code: 'suyun.setting.che.tag',data: this.items}).subscribe(res=>{
      weui.toast('保存成功');
      this.showDialog = false
    })
  }

}
