import { Directive, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BmapPage } from '../bmap-page';
import { BmapContainer } from '../bmap-container';
import { ControlAnchor } from './ControlAnchor';
@Directive({
    selector: 'citylist-control'
})
export class CitylistControl implements OnInit {

    @Output() onChangeBefore: EventEmitter<any> = new EventEmitter();
    @Output() onChangeAfter: EventEmitter<any> = new EventEmitter();

    @Input() anchor: ControlAnchor = 'BMAP_ANCHOR_TOP_LEFT';

    control: any;
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
        const size = new BMap.Size(10, 20);
        this.control = new BMap.CityListControl({
            anchor: window[this.anchor],
            offset: size,
            onChangeBefore: () => {
                this.onChangeBefore.emit('onChangeBefore');
            },
            onChangeAfter: () => {
                this.onChangeAfter.emit('onChangeAfter');
            }
        });
        this._container._map.addControl(this.control);
    }
}
