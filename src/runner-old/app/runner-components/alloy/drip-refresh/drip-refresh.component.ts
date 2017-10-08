import {Component, ElementRef, OnInit, ViewChild,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'alloy-drip-refresh',
  templateUrl: './drip-refresh.component.html',
  styleUrls: ['./drip-refresh.component.scss']
})
export class DripRefreshComponent implements OnInit {
  dripCanvasId: string = 'dripCanvasId'+new Date().getTime();

  @ViewChild('scroller') scroller: ElementRef
  @ViewChild('list') list: ElementRef
  @ViewChild('pull') pull: ElementRef

  @Input() width: number = 0;
  @Input() height: number = 0;

  @Input() hasMore: boolean = true;
  @Output() onRefresh: EventEmitter<any> = new EventEmitter()
  @Output() loadMore: EventEmitter<any> = new EventEmitter()


  drip: any;
  index: number = 0;
  loading: boolean = false;
  constructor(
    public ele: ElementRef
  ) { }

  ngOnInit() {

    window['requirejs']([
      window['module_url']+"assets/bower_components/alloytouch/alloy_touch.js",
      window['module_url']+"assets/bower_components/alloytouch/transformjs/transform.js",
      window['module_url']+"assets/bower_components/alloytouch/refresh/drip_refresh/asset/drip.js",
    ],()=>{
      this.drip = new window['Drip']("#"+this.dripCanvasId, 30);
      let that = this;

      window['Transform'](this.pull.nativeElement,true)
      window['Transform'](this.scroller.nativeElement,true)

      new window['AlloyTouch']({
        touch:this.ele.nativeElement,//反馈触摸的dom
        target: this.scroller.nativeElement, //运动的对象
        property: "translateY",  //被滚动的属性
        initialValue: 0,
        min: 0 + window.innerHeight - this.scroller.nativeElement.scrollHeight, //不必需,滚动属性的最小值
        max: 0, //不必需,滚动属性的最大值
        touchStart: ()=>{
          if (!this.loading) {
            this.drip.show();
          }
        },
        change: function(value){
          if (value < 40) {
            that.pull.nativeElement.translateY = value;
          }
          if (!that.loading) {
            if (value < 40) {
              that.pull.nativeElement.translateY = value;
              that.drip.setDistance(0);
            } else if (value >= 40 && value < 90) {
              that.drip.setDistance(2 * (value - 40));
            } else {
              that.loading = true;
              that.mockRequest(this);
            }  
          }
        },
        touchEnd: function (evt, value) {
          if (that.loading) {
            if (value > 40) {
              this.to(40);
            }
            return false;
          }
          if (value > 90) {
            return false;
          }
          return true;
        }
      })
    })
  }

  mockRequest(at) {
    this.drip.toLoading();
    at.to(40);

    this.onRefresh.emit(at);

    setTimeout(()=>{
      this.drip.hide();
      this.pull.nativeElement.translateY = 0;
      at.to(at.initialValue);
      this.loading = false;
      at.min -= 40 * 3;
    }, 2000);
  }

  doLoadMore(){

  }

  onTouchStart(e: any){}

  onTouchEnd(e: any){
    let nowHeight = this.scroller.nativeElement['translateY'];
    let minHeight = 0 - this.scroller.nativeElement.scrollHeight + window.innerHeight
    if(nowHeight-minHeight < window.innerHeight){
      this.hasMore && this.loadMore.emit(this)
    }
  }

}
