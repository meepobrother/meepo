import {Component, HostBinding, OnInit} from '@angular/core';
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {CoachLessonService} from "services-components/src/app/coach-services/coach-lesson.service";
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
import {Router} from "@angular/router";

import {CoreUtilService} from "../../meepo-core/core-util.service";

@Component({
  selector: 'suyun-coach-mylesson',
  templateUrl: './coach-mylesson.component.html',
  styleUrls: ['./coach-mylesson.component.scss']
})
export class CoachMylessonComponent implements OnInit {
  @HostBinding('@routeState') routeState;
  lessons: any[] = []
  constructor(
      public util: RunnerUtilService,
      public lesson: CoachLessonService,
      public router: Router,
      public core: CoreUtilService
  ) { }

  ngOnInit() {
    this.util.showFooter()
    this.getMylesson(0);
  }

  add(){
    let item = {
      title: '测试课程',
      desc: '课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介',
      images: [],
      total: 6,
      image: window['module_url']+'assets/images/coach/01.jpg',
      price: 10
    }
    this.lessons.push(item)
  }

  more(item: any,index: number){

  }
  showEdit: boolean = false;
  editItem: any = {
    start: {
      name: ''
    },
    end: {
      name: ''
    }
  };
  editIndex: number = 0;
  edit(item: any,index: number){
    this.editItem = item;
    this.editItem['start'] = this.editItem['start'] || {name: '',title: ''}
    this.editItem['end'] = this.editItem['end'] || {name: '',title: ''}
    this.editIndex = index;
    this.showEdit = true;
  }

  delete(item: any,index: number){
    this.lessons.splice(index,1)
    // let url = this.u.createUrl('open',{__do: 'lesson.delete'},'imeepos_coach')
    this.core.post('lesson.delete',{id: item.id},'imeepos_coach').subscribe(res=>{
      weui.toast(res.msg)
    })
  }

  onSelect(e: any){
    this.editItem['tag'] = e.title;
  }

  detail(lesson: any){
    this.router.navigate(['/coach/lesson-detail/',lesson.id])
  }

  onWeekTag(e: any){
    this.editItem['week'] = e;
  }

  showTime: boolean = false;
  isStart: boolean = false;
  onHourSelect(e: any){
    if(this.isStart){
      this.editItem['start'] = e;
    }else{
      this.editItem['end'] = e;
    }
  }
  hourCtrl: any;
  onHourInit(e: any){
    this.hourCtrl = e;
  }

  selectStartTime(){
    this.hourCtrl && this.hourCtrl.show()
    this.isStart = true;
    this.showTime = true;
  }

  selectEndTime(){
    this.hourCtrl && this.hourCtrl.show()
    this.isStart = false;
    this.showTime = true;
  }

  isMutil: boolean = false;
  week: string = '';
  onSelectWeekTag(e: any){
    this.week = e.title;
    this.getMylesson(0)
  }

  cancel(){
    this.showEdit = false;
  }

  save(){
    this.cancel()
    // let url = this.u.createUrl('open',{__do: 'lesson.add'},'imeepos_coach')
    this.core.post('lesson.add',this.editItem,'imeepos_coach').subscribe(res=>{
      this.getMylesson(0)
    })
  }

  getMylesson( start: number){
    this.cancel()
    // let url = this.core.createUrl('open',{__do: 'lesson.getmylesson'},'imeepos_coach')
    this.core.post('lesson.getmylesson',{start: start,len: 20,week: this.week}).subscribe(res=>{
      if(res.code == 1){
        if(res.info){
          this.lessons = res.info;
        }
      }
    })
  }

}
