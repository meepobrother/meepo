import {Component, ElementRef, HostBinding, OnInit, Renderer2} from '@angular/core';
import {CoachLessonService} from "services-components/src/app/coach-services/coach-lesson.service";
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {Router} from "@angular/router";
import {CoreUtilService} from "../../meepo-core/core-util.service";
import {routeAnim} from "../../meepo-core/core-animates/router.anim";

@Component({
  selector: 'suyun-coach-lesson',
  templateUrl: './coach-lesson.component.html',
  styleUrls: ['./coach-lesson.component.scss'],
  animations: [
      routeAnim
  ]
})
export class CoachLessonComponent implements OnInit {
  @HostBinding('@routeState') routeState;
  advs: any[] = []
  navs: any[] = []
  constructor(
    public lesson: CoachLessonService,
    public util: RunnerUtilService,
    public ele: ElementRef,
    public render: Renderer2,
    public core: CoreUtilService,
    public router: Router
  ) {
    this.advs = [
      {
        image: './assets/images/coach/01.jpg',
        link: []
      }
    ]
    this.navs = []
  }

  delete(lesson: any,index: number){
    this.core.post('lesson.delete',{id: lesson.id},'imeepos_coach').subscribe(res=>{
      if(res.code === 1){
        this.lessons.splice(index,1);
      }
    })
  }

  initSetting(){
    this.core.post('setting.get',{code: 'coach.setting.lesson'}).subscribe(res=>{
      if(res['code'] == 0){
        this.core.post('setting.save',{code: 'coach.setting.lesson',data: this.navs}).subscribe(res=>{})
      }else{
        this.navs = res.info;
      }
    })
  }
  isScroll: boolean = true;

  detail(item: any){
    this.router.navigate(['/coach/lesson-detail/',item.id,this.day])
  }
  day: string = '';
  onDaySelect(e: any){
    this.day = e.value;
    this.getList(0)
  }
  tag: string = '';
  selectLessonTag(e: any){
    this.tag = e.title;
    this.getList(0)
  }

  ngOnInit() {
    this.render.setStyle(this.ele.nativeElement,'display','block');
    this.initSetting();
    this.util.showFooter()
  }
  lessons: any[] = []
  getList(start: number){
    this.lesson.search({start: start,len: 20,day: this.day,tag: this.tag}).subscribe(res=>{
      this.lessons = res.info;
    })
  }

}
