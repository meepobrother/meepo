import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CoachLogService} from "services-components/src/app/coach-services/coach-log.service";
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
import {CoreUtilService} from "../../../meepo-core/core-util.service";
@Component({
  selector: 'suyun-coach-teacher-time-tag',
  templateUrl: './coach-teacher-time-tag.component.html',
  styleUrls: ['./coach-teacher-time-tag.component.scss']
})
export class CoachTeacherTimeTagComponent implements OnInit {

  @Input() items: any[] = []
  @Output() onSelect: EventEmitter<any> = new EventEmitter()

  @Input() title: string = '';
  _code: string = '';

  @Input()
  set code(val: string){
    // console.log(val)
    this._code = 'coach.time.'+val;
    this.initConfig();
  }

  constructor(
      public log: CoachLogService,
      public core: CoreUtilService
  ) {
    this.items = [
      {title: '8:30',active: true},
      {title: '9:00',active: false},
      {title: '9:30',active: false},
      {title: '10:00',active: false},
      {title: '10:30',active: false},
      {title: '11:00',active: false},
      {title: '11:30',active: false},
      {title: '12:00',active: false},
      {title: '12:30',active: false},
      {title: '13:00',active: false},
      {title: '13:30',active: false},
      {title: '14:00',active: false},
      {title: '14:30',active: false},
      {title: '15:00',active: false},
      {title: '15:30',active: false},
      {title: '16:00',active: false},
      {title: '16:30',active: false},
      {title: '17:00',active: false},
      {title: '18:00',active: false},
      {title: '18:30',active: false},
      {title: '19:00',active: false},
      {title: '19:30',active: false},
      {title: '20:00',active: false}
    ]
  }

  checkDefault(){
    this.items.map(res=>{
      if(res.active){
        this.select(res)
      }
    })
  }

  ngOnInit() {
    this.initConfig()
  }
  delete(){
    this.items.splice(this.editIndex,1)
    this.showEdit = false;
  }


  select(item: any){
    if(item['disabled']){
      return false;
    }
    this.items.map(res=>{
      res.active = false
    })
    item.active = true;
    this.onSelect.emit(item)
  }

  initConfig(){
    // console.log(this.items)
    this.core.post('setting.get',{code: this._code},'imeepos_coach').subscribe(res=>{
      if(res.code == 0){
        this.core.post('setting.save',{code: this._code,data: this.items}).subscribe(res=>{})
      }else{
        this.items = res.info;
        this.items.map(res=>{
          if(res.title == this.title){
            this.select(res)
          }
        })
        //
      }
      this.checkDefault()
    })
  }
  initDisable(day: string,seat: string,goods: string){
    this.log.getDay({day: day,seat: seat,goods: goods}).subscribe(res=>{
      if(res.code == 1){
        this.items.map(item=>{
          item['disabled'] = false;
          res.info.map(r=>{
            if(r.time == item.title){
              item['disabled'] = true;
            }
          })
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

  save(){
    this.core.post('setting.save',{code: this._code,data: this.items}).subscribe(res=>{
      weui.toast('保存成功');
      this.showDialog = false
    })
  }

}
