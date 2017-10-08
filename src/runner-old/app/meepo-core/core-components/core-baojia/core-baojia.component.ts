import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CoreUtilService } from "../../core-util.service";
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
import { isArray } from 'ionic-angular/util/util';

@Component({
  selector: 'core-baojia',
  templateUrl: './core-baojia.component.html',
  styleUrls: ['./core-baojia.component.scss']
})
export class CoreBaojiaComponent implements OnInit {

  items: any[] = [];

  @Output() onSelect: EventEmitter<any> = new EventEmitter()
  _code: string = '';
  @Input()
  set code(val: string){
    if(val){
      this._code = 'core.baojia.'+val;
      this.initConfig()
    }
  }

  constructor(
      public core: CoreUtilService
  ) {
    this.items = [
      {
        title: '不保价',
        value: '30',
        desc: '最高损坏可赔付30元',
        money: 0,
        active: true
      },
      {
        title: '1赔100',
        value: '100',
        money: 1,
        desc: '最高损坏可赔付100元',
      },
      {
        title: '3赔300',
        value: '300',
        desc: '最高损坏可赔付300元',
        money: 3
      },
      {
        title: '5赔500',
        value: '500',
        desc: '最高损坏可赔付500元',
        money: 5
      },
      {
        title: '10赔1000',
        value: '1000',
        desc: '最高损坏可赔付1000元',
        money: 10
      }
    ]
  }

  ngOnInit() {
    // this.initConfig()
  }

  delete(){
    this.items.splice(this.editIndex,1)
    this.showEdit = false;
  }

  select(item: any){
    this.items.map(res=>{
      res.active = false
    })
    item.active = true;
    this.onSelect.emit(item)
  }

  initConfig(){
    this.core.post('setting.get',{code: this._code}).subscribe(res=>{
      if(res.code == 0){
        this.core.post('setting.save',{code: this._code,data: this.items}).subscribe(res=>{

        });
      }else{
        if(isArray(res.info)){
          this.items = res.info;
        }
      }
      this.items.map(res=>{
        if(res.active){
          this.select(res)
        }
      });
    });
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
    this.core.post('setting.save',{code: this._code,data: this.items}).subscribe(res=>{
      toast('保存成功');
      this.showDialog = false
    })
  }

}
