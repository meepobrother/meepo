import { Component, OnInit } from '@angular/core';
import {TopicsService} from "services-components/src/app/bbs-services/topics.service";
import {SettingService, ThreadclassService} from "services-components";
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {DomSanitizer} from "@angular/platform-browser";

import weui from 'weui.js'

@Component({
  selector: 'suyun-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  items: any[] = [];

  classes: any[] = []
  constructor(
    public topics: TopicsService,
    public myclass: ThreadclassService,
    public util: RunnerUtilService,
    public dom: DomSanitizer,
    public setting: SettingService
  ) {
    this.items = []
    this.classes = [
      {
        title: '全部',
        active: true,
        class_id: 0
      }
    ]
  }


  ngOnInit() {
    this.getList(0)
    this.initClass();
    this.util.refresh()
    console.log(this.util)
  }

  initClass(){
    this.setting.get({code: 'bbs.setting.class'}).subscribe(res=>{
      if(res.code == 1){
        this.classes = res.info;
      }
    })
  }

  class_id: number = 0;
  onFeedTab(e: any){
    console.log(e)
    this.class_id = e.title;
    this.getList(0)
  }
  showEdit: boolean = false;
  showList: boolean = false;
  showItem: any = {};
  showIndex: number = 0
  onEditer(){
    this.showEdit = true;
    this.showList = true;
  }

  cancel(){
    this.showEdit = false;
  }

  add(){
    let it = {
      title: '标题'
    }
    this.classes.push(it)
  }
  save(){
    this.showEdit = false;
    this.setting.save({code: 'bbs.setting.class',data: this.classes}).subscribe(res=>{
      weui.toast('保存成功')
      this.initClass();
    })
  }

  onEdit(e: any,index: number){
    this.showList = false;
    this.showItem = e;
    this.showIndex = index;
  }

  cancelEdit(){
    this.showList = true;
  }

  delEdit(){
    this.classes.splice(this.showIndex,1)
    this.showList = true;
  }

  saveEdit(){
    this.classes[this.showIndex] = this.showItem
    this.showList = true;
  }

  getList(start: number){
    this.topics.search({start: start,len: 20, tab: this.class_id}).subscribe(res=>{
      this.items = res.info;
      this.items.map(res=>{
        res['desc'] = this.dom.bypassSecurityTrustHtml(res['desc'])
      })
    })
  }

}
