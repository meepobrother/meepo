import { Directive, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BmapPage } from '../bmap-page';
import { BmapContainer } from '../bmap-container';
@Directive({
    selector: 'marker'
})
export class Marker implements OnInit {
    @Input() point: any;
    // 设置动画
    _animation: any;
    @Input()
    set animation(val: string) {
        this._animation = val;
    }
    // 设置图标
    _icon: string;
    @Input()
    set icon(val: string) {
        this._icon = val;
    }


    @Output() onClick: EventEmitter<any> = new EventEmitter();

    marker: any;
    constructor(
        public _page: BmapPage,
        public _container: BmapContainer
    ) { }
    ngOnInit() {
        this._page.laodSuccess.subscribe(bmap => {
            this.init(bmap);
        });
    }

    init(BMap: any) {
        let options = {};

        if (this._icon) {
            const icon = new BMap.Icon(this._icon, new BMap.Size(300, 157));
            options = { ...options, icon: icon };
        }
        this.marker = new BMap.Marker(this.point, options);
        if (this._animation) {
            this.marker.setAnimation(window[this._animation]);
        }
        this.marker.addEventListener('click', () => {
            this.onClick.emit('onClick');
        });
        this._container._map.addOverlay(this.marker);
    }
}
