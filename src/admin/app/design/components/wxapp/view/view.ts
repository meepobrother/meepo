import {
    Component, OnInit, Input,
    OnChanges, SimpleChanges,
    HostBinding, HostListener,
    Renderer2, ElementRef
} from '@angular/core';

@Component({
    selector: 'view',
    templateUrl: './view.html',
    styleUrls: ['./view.scss']
})
export class View implements OnInit, OnChanges {
    @Input() widget: ViewDefault = new ViewDefault();

    @HostListener('mouseover', ['$event'])
    mouseover(evt: Event) {
        this._onOver(evt);
    }

    @HostListener('mouseleave', ['$event'])
    mouseleave(evt: Event) {
        this._onLeave(evt);
    }
    constructor(
        private render: Renderer2,
        private ele: ElementRef
    ) { }
    ngOnInit() { }
    ngOnChanges(changes: SimpleChanges) { }
    private _onOver(evt: Event) {
        setTimeout(() => {
            this.render.addClass(this.ele.nativeElement, this.widget['hover-class']);
        }, this.widget['hover-start-time']);

        if (this.widget['hover-stop-propagation']) {
            evt.stopPropagation();
        }
    }

    private _onLeave(evt: Event) {
        setTimeout(() => {
            this.render.removeClass(this.ele.nativeElement, this.widget['hover-class']);
        }, this.widget['hover-stay-time']);
    }
}

export class ViewDefault {
    // 指定按下去的样式类。当 hover-class="none" 时，没有点击态效果
    'hover-class': string = 'none';
    // 指定是否阻止本节点的祖先节点出现点击态
    'hover-stop-propagation': boolean = false;
    // 按住后多久出现点击态，单位毫秒
    'hover-start-time': number = 50;
    // 手指松开后点击态保留时间，单位毫秒
    'hover-stay-time': number = 400;
}

