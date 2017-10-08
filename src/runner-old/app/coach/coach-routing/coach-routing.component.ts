import { Component, OnInit } from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {CoreUtilService} from '../../meepo-core/core-util.service';
@Component({
  selector: 'suyun-coach-routing',
  templateUrl: './coach-routing.component.html',
  styleUrls: ['./coach-routing.component.scss']
})
export class CoachRoutingComponent implements OnInit {
  items: any[] = []
  constructor(
    public util: RunnerUtilService,
    public core: CoreUtilService
  ) {
    this.items = []
  }

  ngOnInit() {
    this.util.hideFooter()
    this.initConfig();
  }

  _code: string = 'coach.routing.footer';

  initConfig(){
      this.core.post('setting.get',{code: this._code},'imeepos_runner').subscribe(res=>{
        if(res.code === 1){
          this.items = res.info;
        }else{
          this.items = [
            {
              title: '预约',
              link: ['/coach/teacher'],
              icon: 'creditlevel'
            },
            {
              title: '器材',
              link: ['/coach/seat'],
              icon: 'discount'
            },
            {
              title: '团课',
              link: ['/coach/lesson'],
              icon: 'all'
            },
            {
              title: '我的',
              link: ['/coach/home'],
              icon: 'home'
            }
          ];
          this.save();
        }
      })
  }
  showEditer: boolean = false;
  onEditer(){
    this.showEditer = true;
  }

  cancel(){
    this.showEditer = false;
  }

  add(){
    let item = {
      title: '标题',
      link: ['/coach/home'],
      icon: 'home'
    };
    this.items.push(item)
  }

  save(){
    this.core.post('setting.save',{code: this._code,data: this.items},'imeepos_runner').subscribe(res=>{
      this.cancel();
    })
  }

  editItem: any;
  editIndex: number;
  showDetail: boolean = false;
  edit(item: any, index: number) {
    this.editItem = item;
    this.editIndex = index;
    this.showDetail = true;
  }

  cancelEdit(){
    this.showDetail = false;
  }

  delEdit(){
    this.items.splice(this.editIndex,1);
    this.cancelEdit()
  }

  saveEdit(){
    this.items[this.editIndex] = this.editItem;
    this.cancelEdit();
  }

  props: any = {
    showAdmin: false
  }

  onLinkSelect(e: any){
    console.log('onLinkSelect',e);
    this.editItem.link = e.item.link;
    this.showModuleSelect = false;
  }

  showModuleSelect: boolean = false;
  openModuleSelect(){
    this.showModuleSelect = !this.showModuleSelect;
  }

  showIconSelect: boolean = false;
  openIconSelect(){
    this.showIconSelect = !this.showIconSelect;
  }

  onIconSelect(e: any){
    console.log('onIconSelect',e);
    this.editItem.icon = e;
    this.showIconSelect = false;
  }

}
