import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Component({
    selector: 'weui-mask',
    templateUrl: 'weui-mask.html',
    styleUrls: ['weui-mask.css'],
    exportAs: 'weuiMask'
})
export class WeuiMask implements OnInit {
    @HostBinding('class.weui-animate-fade-in') private fadeIn: boolean = false;
    @HostBinding('class.weui-mask') private _mask = true;
    onChange: Subject<boolean> = new Subject();

    @HostListener('click', ['$event'])
    toggle() {
        this.fadeIn = !this.fadeIn;
        this.onChange.next(this.fadeIn);
    }

    constructor() { }
    ngOnInit() { }

    hide() {
        this.fadeIn = false;
        this.onChange.next(this.fadeIn);
    }

    show() {
        this.fadeIn = true;
        this.onChange.next(this.fadeIn);
    }
}

