import {Component, Directive, ElementRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import align from 'dom-align';

@Component({
  selector: 'align',
  template: `
    <ng-content></ng-content>
  `
})
export class AlignComponent implements OnInit {
  @Output() onAlign: EventEmitter<any> = new EventEmitter();

  @Input() targetNode: any;
  @Input() points: any[] = ['tl','tr'];
  @Input() offset: any[] = [0,0];
  @Input() targetOffset: any[] = ['0%','0%'];
  @Input() overflow: any[] = []
  @Input() useCssRight: boolean = false;
  @Input() useCssBottom: boolean = false;
  @Input() useCssTransform: boolean = false;

  constructor(
      public ele: ElementRef
  ) { }

  ngOnInit() {
    this.doAlign()
  }

  doAlign(){
    align(this.ele.nativeElement,this.targetNode,{
      points: this.points,
      offset: this.offset,
      targetOffset: this.targetOffset,
      overflow: this.overflow,
      useCssRight: this.useCssRight,
      useCssBottom: this.useCssBottom,
      useCssTransform: this.useCssTransform
    })
    this.onAlign.emit(this)
  }

}




