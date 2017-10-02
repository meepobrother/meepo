import {
    Component, ViewEncapsulation,
    Input, OnChanges, SimpleChanges, EventEmitter,
    Output, HostListener, ElementRef, OnDestroy, NgZone,
    OnInit, HostBinding
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/throttleTime';

import { InfiniteLoaderConfig } from './infinite-loader.config';
@Component({
    selector: 'infinite-loader',
    templateUrl: 'infinite-loader.html',
    styleUrls: ['infinite-loader.css']
})
export class InfiniteLoader implements OnInit, OnChanges, OnDestroy {
    @Input() config: InfiniteLoaderConfig = this.DEF;

    @HostBinding('class.weui-infiniteloader') loader: boolean = true;
    @HostBinding('style.height') height: any;

    @Output() loadmore = new EventEmitter();

    _loading: boolean = false;
    _finished: boolean = false;

    private disposeScroller: Subscription;

    constructor(
        private el: ElementRef,
        private zone: NgZone,
        private DEF: InfiniteLoaderConfig
    ) {
        this.config = this.DEF;
    }

    /** 设置本次加载完成 */
    resolveLoading() {
        this._loading = false;
        this._finished = false;
    }

    /** 设置结束 */
    setFinished() {
        this._loading = false;
        this._finished = true;
    }

    _onScroll($event: any) {
        if (this._loading || this._finished) {
            return '';
        }
        const target = $event.target;
        const scrollPercent = Math.floor(((target.scrollTop + target.clientHeight) / target.scrollHeight) * 100);

        if (scrollPercent > this.config.percent) {
            this._loading = true;
            this.loadmore.emit(this);
        }
    }

    ngOnInit() {
        this.parseConfig();
        this.disposeScroller = Observable
            .fromEvent(this.el.nativeElement.querySelector('.weui-infiniteloader__content'), 'scroll')
            .throttleTime(this.config.throttle)
            .subscribe(($event: any) => {
                this._onScroll($event);
            });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('config' in changes) {
            this.parseConfig();
        }
    }

    ngOnDestroy(): void {
        if (this.disposeScroller) {
            this.disposeScroller.unsubscribe();
        }
    }

    private parseConfig() {
        this.config = Object.assign({}, this.DEF, this.config);
        this.height = this.config.height;
    }
}

