import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
 
import {RunnerUtilService} from "../runner-util.service";
import {CoreUtilService} from "../../meepo-core/core-util.service";
@Component({
  selector: 'suyun-controls-option-tap',
  templateUrl: './controls-option-tap.component.html',
  styleUrls: ['./controls-option-tap.component.scss']
})
export class ControlsOptionTapComponent implements OnInit {
  @Input() title: string = '认证翻倍送信誉';
  @Input() items: any[] = []
  @Output() onItem: EventEmitter<any> = new EventEmitter()
  @Input() hasInput: boolean = false;

  @Input() code: string = null;

  showEditor: boolean = false;
  showList: boolean = false;

  @Input() showXinyu: boolean = true;
  @Input() showMoney: boolean = true;
  @Input() showTag: boolean = true;
  @Input() showDesc: boolean = true;
  @Input() showTitle: boolean = true;

  constructor(
    public core: CoreUtilService,
    public util: RunnerUtilService
  ) {
    this.items = [
      {
        title: '开发测试',
        desc: '0.01元',
        value: 1000,
        money: 0.01,
        active: true,
        tag: ''
      },
      {
        title: '送60',
        desc: '30元',
        value: 60,
        money: 30,
        active: false,
        tag: ''
      },
      {
        title: '送240',
        desc: '120元',
        value: 240,
        money: 120,
        active: false,
        tag: '免审'
      }
    ]
  }

  ngOnInit() {
    this.init();
  }

  onEditer(){
    this.showList = true;
  }

  cancel(){
    this.showList = false;
  }

  save(){
    this.showList = false;
    this.doSave();
  }
  showItem: any = {};
  showIndex: number = 0;
  edit(item: any,index: number){
    this.showEditor = true;
    this.showItem = item;
    this.showIndex = index;
  }

  editCancel(){
    this.showEditor = false;
  }
  delete(){
    this.items.splice(this.showIndex,1)
    this.doSave()
  }
  editSave(){
    this.showEditor = false;
    this.items[this.showIndex] = this.showItem
  }
  default(){
    this.items.map(res=>{
      res.active = false;
    })
    this.showItem['active'] = true;
    this.items[this.showIndex] = this.showItem
  }
  add(){
    let item = {
      title: '标题',
      tag: '',
      desc: '简介',
      value: ''
    }
    this.items.push(item)
  }
  init(){
    if(this.code && this.code.length > 0){
      this.core.post('setting.get',{code: this.code}).subscribe(res=>{
        if(res.code == 0){
          this.core.post('setting.save',{code: this.code,data: this.items}).subscribe(res=>{})
        }else{
          this.items = res.info;
        }
      })
    }
  }

  doSave(){
    this.core.post('setting.save',{code: this.code,data: this.items}).subscribe(res=>{
      toast('保存成功')
    })
  }

  _onChange(e){
    this.onItem.emit(e.target.value)
  }

  _onClick(item: any){
    this.items.map(res=>{
      res.active = false;
    })
    item.active = true;
    this.onItem.emit(item);
    this.showInput = false;
    this.onItem.emit(item)
  }
  showInput: boolean = false;
  _onInput(){
    this.items.map(res=>{
      res.active = false;
    })
    this.showInput = true;
  }

}
