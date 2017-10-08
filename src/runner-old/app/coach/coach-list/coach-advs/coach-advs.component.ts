import {Component, Input, OnInit} from '@angular/core';
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
import {CoreUtilService} from "../../../meepo-core/core-util.service";

@Component({
  selector: 'coach-advs',
  templateUrl: './coach-advs.component.html',
  styleUrls: ['./coach-advs.component.scss']
})
export class CoachAdvsComponent implements OnInit {
  advs: any[] = []

  @Input() code: string = '';
  
  constructor(
      public core: CoreUtilService
  ) {

  }

  ngOnInit() {
    this.code = this.code || 'coach.setting.advs'
    this.core.post('setting.get',{code: this.code},'imeepos_runner').subscribe(res=>{
      if(res.code == 1){
        this.advs = res.info;
      }else{
        this.core.post('setting.save',{code: this.code,data: this.advs},'imeepos_runner').subscribe(res=>{})
      }
    })
  }

  showEditer: boolean = false;
  onEditer(){
    this.showEditer = true;
  }

  add(){
    let adv = {
      image: window['module_url'] + './assets/images/coach/01.jpg',
      title: '测试'
    }
    this.advs.push(adv)
  }

  cancel(){
    this.showEditer = false;
  }

  save(){
    this.core.post('setting.save',{code: this.code,data: this.advs},'imeepos_runner').subscribe(res=>{
      toast('保存成功')
      this.showEditer = false;
    })
  }

  saveEdit(){
    this.advs[this.editIndex] = this.editItem;
    this.showList = true;
  }

  onUpload(e: any){
    this.editItem['image'] = e;
    this.advs[this.editIndex] = this.editItem
  }

  deleteEdit(){
    this.advs.splice(this.editIndex,1)
    this.cancelEdit()
  }

  cancelEdit(){
    this.showList = true;
  }
  total: number = 1;

  editItem: any = {}
  editIndex: number = 0;
  showList: boolean = true;
  editAdv(e: any,index: number){
    this.editItem = e;
    this.editIndex = index;
    this.showList = false;
  }

}
