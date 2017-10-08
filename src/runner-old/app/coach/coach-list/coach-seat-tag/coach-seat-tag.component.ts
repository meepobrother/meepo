import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
import {CoreUtilService} from "../../../meepo-core/core-util.service";
@Component({
  selector: 'suyun-coach-seat-tag',
  templateUrl: './coach-seat-tag.component.html',
  styleUrls: ['./coach-seat-tag.component.scss']
})
export class CoachSeatTagComponent implements OnInit {

  @Input() items: any[] = []
  @Output() onSelect: EventEmitter<any> = new EventEmitter()

  @Input() title: string = '';
  _code: string = '';

  @Input()
  set code(val: string){
    // console.log(val)
    this._code = 'coach.seat.'+val;
    this.initConfig();
  }
  constructor(
    public core: CoreUtilService
  ) {
    this.items = [
      {title: '1号机',active: true},
      {title: '2号机',active: false},
      {title: '3号机',active: false},
      {title: '4号机',active: false},
      {title: '5号机',active: false},
      {title: '6号机',active: false},
      {title: '7号机',active: false},
      {title: '8号机',active: false}
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
        this.core.post('setting.save',{code: this._code,data: this.items}).subscribe(res=>{

        })
      }else{
        this.items = res.info;
        this.items.map(res=>{
          if(res.title == this.title){
            this.select(res)
          }
        })
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
    this.core.post('setting.save',{code: this._code,data: this.items},'imeepos_coach').subscribe(res=>{
      weui.toast('保存成功');
      this.showDialog = false
    })
  }

}
