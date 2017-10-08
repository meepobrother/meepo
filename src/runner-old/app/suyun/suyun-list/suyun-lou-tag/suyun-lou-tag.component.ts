import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CoreUtilService } from '../../../meepo-core/core-util.service';
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
@Component({
  selector: 'suyun-suyun-lou-tag',
  templateUrl: './suyun-lou-tag.component.html',
  styleUrls: ['./suyun-lou-tag.component.scss']
})
export class SuyunLouTagComponent implements OnInit {

  @Input() items: any[] = []
  @Output() onSelect: EventEmitter<any> = new EventEmitter()

  @Input() title: string = '';
  constructor(
    public core: CoreUtilService
  ) {
    this.items = [
      {
        title: '1-3层',
        active: true
      },
      {
        title: '4-5层'
      },
      {
        title: '6-8层'
      },
      {
        title: '9层以上'
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
    this.core.post('setting.get',{code: 'suyun.setting.lou.tag'}).subscribe(res=>{
      if(res.code == 0){
        this.core.post('setting.save',{code: 'suyun.setting.lou.tag',data: this.items}).subscribe(res=>{

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
    this.editIndex = index;
  }

  cancelEdit(){
    this.showEdit = false;
  }

  saveEdit(){
    this.items[this.editIndex]= this.editItem;
    this.cancelEdit();
  }

  default(){
    this.items.map(res=>{
      res.active = false
    });
    this.items[this.editIndex]['active'] = true;
  }

  add(){
    let item = {
      title: '标签'
    }
    this.items.push(item);
  }

  delete(){
    this.items.splice(this.editIndex,1);
    this.showEdit = false;
  }

  save(){
    this.core.post('setting.save',{code: 'suyun.setting.lou.tag',data: this.items}).subscribe(res=>{
      weui.toast('保存成功');
      this.showDialog = false;
    });
  }

}
