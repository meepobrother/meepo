import {Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output, Renderer2} from '@angular/core';
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
import {CoreUtilService} from "../../core-util.service";
import { isArray } from 'ionic-angular/util/util';
@Component({
  selector: 'core-tags',
  templateUrl: './core-tags.component.html',
  styleUrls: ['./core-tags.component.scss']
})
export class CoreTagsComponent implements OnInit {
  // @HostBinding('@leftIn') leftIn;
  items: any[] = []
  @Output() onSelect: EventEmitter<any> = new EventEmitter()

  @Input() title: string = '';
  _code: string = '';

  @Input()
  set code(val: string){
    if(val){
      this._code = 'core.tags.'+val;
      this.items = []
      this.initConfig();
    }
  }

  @Input() isGrid: boolean = false;
  constructor(
      public core: CoreUtilService,
      public ele: ElementRef,
      public render: Renderer2
  ) {
    this.items = []
    this.render.setStyle(this.ele.nativeElement,'display','block');
    this.render.setStyle(this.ele.nativeElement,'position','relative');
    this.render.setStyle(this.ele.nativeElement,'min-height','80px');
  }

  checkDefault(){
    this.items.map(res=>{
      if(res.active){
        this.select(res)
      }
    })
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
    this.core.post('setting.get',{code: this._code},'imeepos_runner').subscribe(res=>{
      if(res.code == 0){
        this.core.post('setting.save',{code: this._code,data: this.items}).subscribe(res=>{})
      }else{
        if(isArray(res.info)){
          this.items = res.info;
          this.items.map(res=>{
            if(res.title == this.title){
              this.select(res)
            }
          });
        }
      }
      this.checkDefault();
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

  save(){
    this.core.post('setting.save',{code: this._code,data: this.items},'imeepos_runner').subscribe(res=>{
      this.showDialog = false
    })
  }

}
