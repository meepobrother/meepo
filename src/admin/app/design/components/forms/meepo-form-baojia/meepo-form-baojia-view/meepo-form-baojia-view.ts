import { Component, OnInit, Input } from '@angular/core';
import { MeepoFormBaojiaDefault } from '../../../../classes';
@Component({
    selector: 'meepo-form-baojia-view',
    templateUrl: './meepo-form-baojia-view.html',
    styleUrls: ['./meepo-form-baojia-view.scss']
})
export class MeepoFormBaojiaView implements OnInit {
    @Input() widget: MeepoFormBaojiaDefault = new MeepoFormBaojiaDefault();
    constructor() { }

    ngOnInit() { }

    select(item: any) {
        this.widget.children.map(res => {
            res.active = false
        });
        item.active = true;
    }
}

