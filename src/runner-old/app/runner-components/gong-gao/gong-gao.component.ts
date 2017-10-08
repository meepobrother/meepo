import {Component, Input, OnInit} from '@angular/core';
import {RunnerUtilService} from "../runner-util.service";
import {CoreUtilService} from "../../meepo-core/core-util.service";

declare const require;
let store = require('store');

@Component({
  selector: 'bbs-gong-gao',
  templateUrl: './gong-gao.component.html',
  styleUrls: ['./gong-gao.component.scss']
})
export class GongGaoComponent implements OnInit {
  items:any[] = []
  @Input() code: string = '';

  constructor(
    public core: CoreUtilService,
    public util: RunnerUtilService
  ) {
    // this.reset();
  }

  reset(){
    this.items = [{
      title: '小伙伴们有任何产品问题请在这里反馈',
      color: 'rgb(253, 131, 75)'
    },{
      title: '小伙伴们有任何产品问题请在这里反馈',
      color: 'rgb(57, 192, 240)'
    },{
      title: '小伙伴们有任何产品问题请在这里反馈',
      color: 'rgb(156, 156, 156)'
    }]
  }

  ngOnInit() {
    this.initConfig();
  }

  add(){
    let item = {
      title: '小伙伴们有任何产品问题请在这里反馈',
        color: 'rgb(253, 131, 75)'
    }
    this.items.push(item)
  }

  delete(index: number){
    this.items.splice(index,1)
  }
  initOnlineConfig(){
    this.core.post('setting.get',{code: this.code}).subscribe(res=>{
      if(res.code == 0){
        this.reset();
        this.core.post('settting.save',{code: this.code,data: this.items}).subscribe(res=>{})
      }else{
        this.items = res.info;
      }
      store.set(this.code,this.items)
    })
  }
  initConfig(){
    this.util.checkVersion().subscribe(res=>{
      if(res){
        let data = store.get(this.code)
        if(data){
          this.items = data;
        }else{
          this.initOnlineConfig()
        }
      }else{
        this.initOnlineConfig()
      }
    })
  }
  showEdit: boolean = false;
  onEdit(){
    this.showEdit = true;
  }

  save(){
    this.core.post('setting.save',{code: this.code ,data: this.items}).subscribe(res=>{
      this.showEdit = false
    })
  }

  cancel(){
    this.showEdit = false
  }

}
