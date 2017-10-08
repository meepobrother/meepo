import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
import {CoreUtilService} from "../../../meepo-core/core-util.service";
@Component({
  selector: 'coach-seat-class',
  templateUrl: './coach-seat-class.component.html',
  styleUrls: ['./coach-seat-class.component.scss']
})
export class CoachSeatClassComponent implements OnInit {
  navs: any[] = []
  @Input() code: string = '';
  constructor(
      public core: CoreUtilService
  ) {
    this.navs = [
      {
        title: '划船器',
        active: true,
        code: 'huachuan'
      },
      {
        title: '健身车',
        code: 'jianshenche'
      },
      {
        title: '跑步车',
        code: 'paobuche'
      },
      {
        title: '健步车',
        code: 'jianbuche'
      },
      {
        title: '美腰机',
        code: 'meiyaoji'
      },
      {
        title: '台阶机',
        code: 'taijieji'
      },
      {
        title: '椭圆机',
        code: 'tuoyuanji'
      }
    ]
  }

  ngOnInit() {
    this.code = 'coach.class.'+this.code
    this.core.post('setting.get',{code: this.code},'imeepos_coach').subscribe(res=>{
      if(res.code == 1){
        this.navs = res.info;
        this.getDefault()
      }else{
        this.getDefault()
      }
    })
  }

  getDefault(){
    this.navs.map(res=>{
      if(res.active){
        this._onClick(res)
      }
    })
  }
  showEditer: boolean = false;
  onEditer(){
    this.showEditer = true;
  }

  //editer
  cancel(){
    this.showEditer = false;
  }
  add(){
    let item = {
      title: '测试',
      active: false
    }
    this.navs.push(item)
  }

  save(){
    this.core.post('setting.save',{code: this.code,data: this.navs},'imeepos_coach').subscribe(res=>{
      weui.toast('保存成功')
      this.cancel()
    })
  }
  showList: boolean = true;
  editItem: any = {};
  editIndex: number = 0;
  doEdit(item: any,index: number){
      this.editItem = item;
      this.editIndex = index;
      this.showList = false;
  }

  cancelEdit(){
    this.showList = true;
  }
  delEdit(){
    this.showList = true;
    this.navs.splice(this.editIndex,1)
  }
  defaultEdit(){
    this.navs.map(res=>{
      res.active = false;
    })
    this.editItem.active = true;
  }
  saveEdit(){
    this.navs[this.editIndex] = this.editItem;
    this.cancelEdit()
  }
  //editer

  @Input() items: any[] = [];
  @Output() onItem: EventEmitter<any> = new EventEmitter()

  _onClick(item:any){
    this.navs.map(res=>{
      res.active = false;
    })
    item.active = true;
    this.onItem.emit(item)
  }

}
