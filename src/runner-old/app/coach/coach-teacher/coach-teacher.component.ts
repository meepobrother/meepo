import {Component, ElementRef, HostBinding, OnInit, Renderer2} from '@angular/core';
import {CoachTeacherService} from "services-components";
import {Router} from "@angular/router";
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {routeFadeStateTrigger, routeSlideStateTrigger} from "../../runner-components/animate/route-animation";
import {routeAnim} from "../../meepo-core/core-animates/router.anim";

@Component({
  selector: 'suyun-coach-teacher',
  templateUrl: './coach-teacher.component.html',
  styleUrls: ['./coach-teacher.component.scss'],
  animations: [
      routeAnim
  ]
})
export class CoachTeacherComponent implements OnInit {
  @HostBinding('@routeState') routeState;
  advs: any[] = []
  teachers: any[] = []

  navs: any[] = []
  isScroll: boolean = true;

  constructor(
    public teacher: CoachTeacherService,
    public router: Router,
    public util: RunnerUtilService,
    public ele: ElementRef,
    public render: Renderer2
  ) {
    this.advs = [
      {
        image: window['module_url'] + './assets/images/coach/01.jpg',
        link: []
      }
    ]
    this.navs = [
      {
        title: '私人教练',
        active: true
      },
      {
        title: '团操教练'
      },
      {
        title: '场地预约'
      }
    ]
  }
  tag: string = '';
  onSelectTeacher(e: any){
    this.tag = e.title;
    this.getList(0)
  }

  ngOnInit() {
    this.render.setStyle(this.ele.nativeElement,'display','block');
    this.getList(0)
    this.util.showFooter()
  }

  getList(start: number){
    this.teacher.search({start: start,len: 20,tag: this.tag}).subscribe(res=>{
      if(res.code == 1){
        this.teachers = res.info;
      }
    })
  }

  onItem(item: any){
    this.router.navigate(['/coach/teacher-detail/',item.id])
  }

}
