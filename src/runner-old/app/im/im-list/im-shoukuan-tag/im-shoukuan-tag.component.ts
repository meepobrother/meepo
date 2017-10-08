import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CoreUtilService } from '../../../meepo-core/core-util.service';
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;

@Component({
  selector: 'suyun-im-shoukuan-tag',
  templateUrl: './im-shoukuan-tag.component.html',
  styleUrls: ['./im-shoukuan-tag.component.scss']
})
export class ImShoukuanTagComponent implements OnInit {

  @Input() items: any[] = []
  @Output() onSelect: EventEmitter<any> = new EventEmitter()

  @Input() title: string = '';
  constructor(
      public core: CoreUtilService
  ) {
    this.items = [
      {
        title: '任务加时收款',
        active: true
      },
      {
        title: '与客户描述不符,赏金与工作量不符'
      },
      {
        title: '协商后加款'
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
    this.core.post('setting.get',{code: 'im.setting.shoukuan.tag'}).subscribe(res=>{
      if(res.code == 0){
        this.core.post('setting.save',{code: 'im.setting.shoukuan.tag',data: this.items}).subscribe(res=>{

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
    this.core.post('setting.save',{code: 'im.setting.shoukuan.tag',data: this.items}).subscribe(res=>{
      toast('保存成功');
      this.showDialog = false
    })
  }

}
