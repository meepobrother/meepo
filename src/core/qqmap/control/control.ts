import {
    Directive,
    ElementRef,
    OnInit,
    Input,
    Renderer2
} from '@angular/core';
import { QqmapPage } from '../qqmap-page';
import { QqmapContainer } from '../qqmap-container';

@Directive({
    selector: 'control',
})
export class Control implements OnInit {
    @Input() position: string = 'TOP_CENTER';
    constructor(
        public _container: QqmapContainer,
        public _page: QqmapPage,
        public ele: ElementRef,
        public render: Renderer2
    ) { }
    ngOnInit() {
        this._page.laodSuccess.subscribe(qq => {
            this.init(qq);
        });
    }

    init(qq: any) {
        this._container.map.controls[qq.maps.ControlPosition[this.position]].push(this.ele.nativeElement);
    }
}
