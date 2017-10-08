import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TouchComponent} from "../touch/touch.component";

@Component({
  selector: 'alloy-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {
  target: any;
  touchCtrl: any;

  @ViewChild('alloyTouch') alloyTouch: TouchComponent

  @Output() loadMore: EventEmitter<any> = new EventEmitter()
  @Input() hasMore: boolean = true;

  constructor() { }


  ngOnInit() {
  }

  onTransform(e: any){
    this.target = e.ele;
  }

  onTouch(e: any){
    this.touchCtrl = e;
  }

  reresh(){
    let minHeight = 0 - this.target.scrollHeight + window.innerHeight
    this.touchCtrl.min = minHeight;
  }

  onTouchEnd(e: any){
    let nowHeight = this.target['translateY'];
    let minHeight = 0 - this.target.scrollHeight + window.innerHeight
    if(nowHeight-minHeight < window.innerHeight){
      this.hasMore && this.loadMore.emit(this)
    }
  }

}
