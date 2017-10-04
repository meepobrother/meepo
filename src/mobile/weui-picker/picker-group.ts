import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import {
    Component,
    Directive,
    HostBinding,
    ContentChildren,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
    QueryList,
    AfterContentInit,
    OnInit,
    Inject,
    Renderer2,
    Input,
    forwardRef
} from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

import { WeuiPickerItem } from './picker-item';
import { WeuiPicker } from './weui-picker';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
    selector: 'picker-group',
    templateUrl: './picker-group.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => WeuiPickerGroup),
            multi: true
        }
    ]
})
export class WeuiPickerGroup implements AfterContentInit, OnInit, ControlValueAccessor {
    @HostBinding('class.weui-picker__group') _group: boolean = true;

    @Output() onChangeFn: (_: any) => {};

    @ViewChild('content') content: ElementRef;
    // items
    @ContentChildren(WeuiPickerItem) items: QueryList<WeuiPickerItem>;

    @Input() id: string;
    scrollable: any;
    offset: number = 3;
    rowHeight: number = 34;
    temp: any = null;
    bodyHeight: number = 7 * 34;
    translate: number;

    start: any;                                                  // 保存开始按下的位置
    end: any;                                                    // 保存结束时的位置
    startTime: any;                                              // 开始触摸的时间
    points: any[] = [];                                          // 记录移动点
    windowHeight: number = window.innerHeight;                    // 屏幕的高度

    contentStyle: any = {};
    constructor() { }

    writeValue(obj: any): void {
        console.log('TODO', obj);
    }
    registerOnChange(fn: any): void {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn: any): void {
        console.log('TODO', fn);
    }
    setDisabledState(isDisabled: boolean): void {
        console.log('TODO', isDisabled);
    }

    onTouchStart(evt: any) {
        this._start(evt.pageY);
    }
    onTouchMove(evt: any) {
        this._move(evt.pageY);
    }
    onTouchEnd(evt: any) {
        this._end(evt.pageY);
    }

    ngOnInit() {
        this.scrollable = this.content.nativeElement;
    }

    ngAfterContentInit() {
        if (this.temp !== null && this.temp < this.items.length) {
            const index = this.temp;
            this.doSelect(index);
            this.translate = (this.offset - index) * this.rowHeight;
        } else {
            const index = this.getDefaultIndex();
            this.doSelect(index);
            this.translate = this.getDefaultTranslate();
        }
        this.setTranslate(this.translate);
    }

    doSelect(index: number) {
        this.items.map((res, key) => {
            if (index === key) {
                this.onChangeFn(res.item);
            }
        });
    }

    private _start(pageY) {
        this.start = pageY;
        this.startTime = +new Date();
    }

    private _move(pageY) {
        this.end = pageY;
        const diff = this.end - this.start;

        this.setTransition(0);
        this.setTranslate((this.translate + diff));
        this.startTime = +new Date();
        this.points.push({ time: this.startTime, y: this.end });
        if (this.points.length > 40) {
            this.points.shift();
        }
    }

    setTransition(time) {
        this.contentStyle = {
            ...this.contentStyle,
            '-webkit-transition': `all ${time}s`,
            'transition': `all ${time}s`
        };
    }

    setTranslate(diff) {
        this.contentStyle = {
            ...this.contentStyle,
            '-webkit-transform': `translate3d(0, ${diff}px, 0)`,
            'transform': `translate3d(0, ${diff}px, 0)`
        };
    }

    private _end(pageY) {
        if (!this.start) {
            return '';
        }

        /**
         * 思路:
         * 0. touchstart 记录按下的点和时间
         * 1. touchmove 移动时记录前 40个经过的点和时间
         * 2. touchend 松开手时, 记录该点和时间. 如果松开手时的时间, 距离上一次 move时的时间超过 100ms, 那么认为停止了, 不执行惯性滑动
         *    如果间隔时间在 100ms 内, 查找 100ms 内最近的那个点, 和松开手时的那个点, 计算距离和时间差, 算出速度
         *    速度乘以惯性滑动的时间, 例如 300ms, 计算出应该滑动的距离
         */
        const endTime = new Date().getTime();
        const relativeY = this.windowHeight - (this.bodyHeight / 2);
        this.end = pageY;

        // 如果上次时间距离松开手的时间超过 100ms, 则停止了, 没有惯性滑动
        if (endTime - this.startTime > 100) {
            // 如果end和start相差小于10，则视为
            if (Math.abs(this.end - this.start) > 10) {
                this.stop(this.end - this.start);
            } else {
                this.stop(relativeY - this.end);
            }
        } else {
            if (Math.abs(this.end - this.start) > 10) {
                const endPos = this.points.length - 1;
                let startPos = endPos;
                for (let i = endPos; i > 0 && this.startTime - this.points[i].time < 100; i--) {
                    startPos = i;
                }

                if (startPos !== endPos) {
                    const ep = this.points[endPos];
                    const sp = this.points[startPos];
                    const t = ep.time - sp.time;
                    const s = ep.y - sp.y;
                    const v = s / t; // 出手时的速度
                    const diff = v * 150 + (this.end - this.start); // 滑行 150ms,这里直接影响“灵敏度”
                    this.stop(diff);
                } else {
                    this.stop(0);
                }
            } else {
                this.stop(relativeY - this.end);
            }
        }
        this.start = null;
    }

    stop(diff) {
        this.translate += diff;

        // 移动到最接近的那一行
        this.translate = Math.round(this.translate / this.rowHeight) * this.rowHeight;
        const max = this.getMax();
        const min = this.getMin();
        // 不要超过最大值或者最小值
        if (this.translate > max) {
            this.translate = max;
        }
        if (this.translate < min) {
            this.translate = min;
        }

        // 如果是 disabled 的就跳过
        let index = this.offset - this.translate / this.rowHeight;
        while (!!this.items[index] && this.items[index].disabled) {
            diff > 0 ? ++index : --index;
        }
        this.translate = (this.offset - index) * this.rowHeight;
        this.setTransition(.3);
        this.setTranslate(this.translate);

        // 触发选择事件
        this.doSelect(index);
    }

    private getDefaultIndex() {
        let current = Math.floor(this.items.length / 2);
        let count = 0;
        this.items.map((res, key) => {
            if (res.active) {
                current = key;
            }
        });
        while (!!this.items[current] && this.items[current].disabled) {
            current = ++current % this.items.length;
            count++;
            if (count > this.items.length) {
                throw new Error('No selectable item.');
            }
        }
        return current;
    }

    private getDefaultTranslate() {
        const currentIndex = this.getDefaultIndex();
        return (this.offset - currentIndex) * this.rowHeight;
    }

    private getMax() {
        return this.offset * this.rowHeight;
    }

    private getMin() {
        return -(this.rowHeight * (this.items.length - this.offset - 1));
    }
}
