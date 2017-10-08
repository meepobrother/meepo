import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as actions from '../../redux/quick/action';
import { Store } from '@ngrx/store';

@Component({
  selector: 'suyun-assistive-touch',
  templateUrl: './assistive-touch.component.html',
  styleUrls: ['./assistive-touch.component.scss']
})
export class AssistiveTouchComponent implements OnInit {
  @ViewChild('container') container: ElementRef;
  constructor(
    public store$: Store<any>
  ) {}

  onClick(){
    this.store$.dispatch(new actions.ToggleAction({}))
  }

  ngOnInit() {
    window['requirejs']([
      window['module_url'] + "./assets/bower_components/alloytouch/alloy_touch.js",
      window['module_url'] + "./assets/bower_components/alloytouch/transformjs/transform.js",
    ],()=>{
      let box = this.container.nativeElement;
      window['Transform'](box);
      new window['AlloyTouch']({
        touch: box,
        pressMove: (evt)=>{
          box['translateX'] += evt.deltaX;
          box['translateY'] += evt.deltaY;
        }
      });
    });
  }

}
