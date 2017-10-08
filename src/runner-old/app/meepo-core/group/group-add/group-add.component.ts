import { Component, OnInit } from '@angular/core';
import {CoreUtilService} from "../../core-util.service";
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
@Component({
  selector: 'suyun-group-add',
  templateUrl: './group-add.component.html',
  styleUrls: ['./group-add.component.scss']
})
export class GroupAddComponent implements OnInit {
  post: any = {
    title: '',
    modules: []
  }
  constructor(
      public core: CoreUtilService
  ) { }

  ngOnInit() {

  }

  onSelect(e: any){
    this.post['modules'] = e;
  }

  save(){
    this.core.post('group.add',this.post,'imeepos_runner').subscribe(res=>{
      if(res.code == 1){
        weui.toast(res.msg)
      }else{
        weui.toast(res.msg)
      }
    })
  }
}
