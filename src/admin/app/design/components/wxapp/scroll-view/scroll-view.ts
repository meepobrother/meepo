import {
    Component, OnInit,
    Input, HostBinding,
    ElementRef, Renderer2
} from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Component({
    selector: 'scroll-view',
    templateUrl: './scroll-view.html',
    styleUrls: ['./scroll-view.scss']
})
export class ScrollView implements OnInit {
    @Input() widget: ScrollDefault = new ScrollDefault();
    constructor(
        public ele: ElementRef,
        public render: Renderer2
    ) { }
    ngOnInit() {
        this.setWidget();
        this.render.listen(this.ele.nativeElement, 'scroll', (evt: any) => {
            const scrollHeight = this.ele.nativeElement.scrollHeight;
            const clientHeight = this.ele.nativeElement.clientHeight;
            const scrollTop = this.ele.nativeElement.scrollTop;
            const scrollWidth = this.ele.nativeElement.scrollWidth;
            const clientWidth = this.ele.nativeElement.clientWidth;
            const scrollLeft = this.ele.nativeElement.scrollLeft;
            if (this.widget['scroll-y']) {
                // y 方向
                const len = scrollHeight - scrollTop - clientHeight;
                if (len <= this.widget['lower-threshold']) {
                    this.widget.bindscrolltolower.next(len);
                }
                if (scrollTop <= this.widget['upper-threshold']) {
                    this.widget.bindscrolltoupper.next(scrollTop);
                }
            }
            if (this.widget['scroll-x']) {
                const len = scrollWidth - scrollLeft - clientWidth;
                if (len <= this.widget['lower-threshold']) {
                    this.widget.bindscrolltolower.next(len);
                }
                if (scrollLeft <= this.widget['upper-threshold']) {
                    this.widget.bindscrolltoupper.next(scrollTop);
                }
            }
            this.widget.bindscroll.next(evt);
        })
    }

    setWidget() {
        if (this.widget['scroll-x']) {
            this.render.setStyle(this.ele.nativeElement, 'overflow-x', 'auto');
        }
        if (this.widget['scroll-y']) {
            this.render.setStyle(this.ele.nativeElement, 'overflow-y', 'auto');
        }
    }
}


export class ScrollDefault {
    // 允许横向滚动
    'scroll-x': boolean = false;
    // 允许纵向滚动
    'scroll-y': boolean = false;
    // 距顶部/左边多远时（单位px），触发 scrolltoupper 事件
    'upper-threshold': number = 50;
    // 距底部/右边多远时（单位px），触发 scrolltolower 事件
    'lower-threshold': number = 50;
    // 设置竖向滚动条位置
    'scroll-top': number;
    // 设置横向滚动条位置
    'scroll-left': number;
    // 值应为某子元素id（id不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素
    'scroll-into-view': string;
    // 在设置滚动条位置时使用动画过渡
    'scroll-with-animation': boolean = false;
    // iOS点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向
    'enable-back-to-top': boolean = false;
    // 滚动到顶部/左边，会触发 scrolltoupper 事件
    bindscrolltoupper: Subject<any> = new Subject();
    // 滚动到底部/右边，会触发 scrolltolower 事件
    bindscrolltolower: Subject<any> = new Subject();
    // 滚动时触发，event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY}
    bindscroll: Subject<any> = new Subject();
}