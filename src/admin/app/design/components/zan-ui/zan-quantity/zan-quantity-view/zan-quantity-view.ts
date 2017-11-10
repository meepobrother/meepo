import { Component, OnInit, Input } from '@angular/core';
import { ZanQuantityDefault } from '../../../../classes';
@Component({
    selector: 'zan-quantity-view',
    templateUrl: './zan-quantity-view.html',
    styleUrls: ['./zan-quantity-view.scss']
})
export class ZanQuantityView implements OnInit {
    @Input() widget: ZanQuantityDefault = new ZanQuantityDefault();
    constructor() { }

    ngOnInit() { }

    add() {
        if (this.widget.num < this.widget.max) {
            this.widget.num = this.widget.num + this.widget.step;
        }
    }

    del() {
        if (this.widget.num > this.widget.min) {
            this.widget.num = this.widget.num - this.widget.step;
        }
    }
}