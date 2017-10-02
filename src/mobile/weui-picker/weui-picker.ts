import {
    Component,
    OnInit,
    HostBinding,
    Directive,
    ContentChildren,
    Output,
    EventEmitter,
    QueryList,
    forwardRef,
    AfterContentInit,
    ElementRef,
    ViewChild,
    Inject,
    Renderer2,
    AfterViewInit,
    Input,
    Optional,
    SkipSelf,
    HostListener
} from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { WeuiPickerGroup } from './picker-group';
@Directive({
    selector: 'picker-bd',
})
export class WeuiPickerBd {
    @HostBinding('class.weui-picker__bd') _bd: boolean = true;
}


@Directive({
    selector: 'picker-mask',
})
export class WeuiPickerMask {
    @HostBinding('class.weui-picker__mask') _mask: boolean = true;

    @Output() onTouchStart: EventEmitter<any> = new EventEmitter();
    @Output() onTouchMove: EventEmitter<any> = new EventEmitter();
    @Output() onTouchEnd: EventEmitter<any> = new EventEmitter();

    @HostListener('touchstart', ['$event'])
    touchstart(evt: any) {
        this.onTouchStart.emit(evt.changedTouches[0]);
    }

    @HostListener('touchmove', ['$event'])
    touchmove(evt: any) {
        this.onTouchMove.emit(evt.changedTouches[0]);
        evt.preventDefault();
    }

    @HostListener('touchend', ['$event'])
    touchend(evt: any) {
        this.onTouchEnd.emit(evt.changedTouches[0]);
    }

    @HostListener('mousedown', ['$event'])
    mousedown(evt: any) {
        this.onTouchStart.emit(evt);
        evt.stopPropagation();
        evt.preventDefault();
    }

    @HostListener('mousemove', ['$event'])
    mousemove(evt: any) {
        this.onTouchMove.emit(evt);
        evt.stopPropagation();
        evt.preventDefault();
    }

    @HostListener('mouseup', ['$event'])
    mouseup(evt: any) {
        this.onTouchEnd.emit(evt);
        evt.stopPropagation();
        evt.preventDefault();
    }

    @HostListener('mouseleave', ['$event'])
    mouseleave(evt: any) {
        this.onTouchEnd.emit(evt);
        evt.stopPropagation();
        evt.preventDefault();
    }
}

@Directive({
    selector: 'picker-indicator',
})
export class WeuiPickerIndicator {
    @HostBinding('class.weui-picker__indicator') _indicator: boolean = true;
}

@Directive({
    selector: 'picker-content',
})
export class WeuiPickerContent {
    @HostBinding('class.weui-picker__content') _content: boolean = true;
}

import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'weui-picker',
    template: `
        <picker-hd>
            <ng-content select="picker-action[left]"></ng-content>
            <ng-content select="picker-action[right]"></ng-content>
        </picker-hd>
        <picker-bd>
            <ng-content></ng-content>
        </picker-bd>
    `,
    exportAs: 'weuiPicker'
})
export class WeuiPicker implements OnInit, AfterContentInit {
    model: any;
    constructor() { }
    ngOnInit() { }
    ngAfterContentInit() { }

    @HostBinding('class.weui-picker') _picker: boolean = true;
    @HostBinding('class.weui-animate-slide-up') _open: boolean = true;

    @Input()
    set open(val: boolean) {
        this._open = val;
    }

    show() {
        this._open = true;
    }
    hide() {
        this._open = false;
    }
    toggle() {
        this._open = !this._open;
    }
}
