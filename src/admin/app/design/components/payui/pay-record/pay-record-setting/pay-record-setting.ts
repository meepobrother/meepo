import { Component, OnInit, Input } from '@angular/core';
import { PayRecordDefault } from '../../../../classes';

@Component({
    selector: 'pay-record-setting',
    templateUrl: './pay-record-setting.html',
    styleUrls: ['./pay-record-setting.scss']
})
export class PayRecordSetting implements OnInit {
    @Input() widget: PayRecordDefault = new PayRecordDefault();
    openDataDialog: boolean;

    activeItem: any;
    activeIndex: number;
    constructor() { }

    ngOnInit() { }

    setDefault(item: any) {
        this.widget.children.map(res => {
            res['active'] = false;
        });
        item['active'] = true;
    }

    delete(index: number) {
        this.widget.children.splice(index);
    }

    add() {
        let item = { title: '测试' };
        this.widget.children.push(item);
    }

    dataSelectData(item, index) {
        this.openDataDialog = true;
        this.activeItem = item;
        this.activeIndex = index;
    }

    setStatus(__do: string, __post: any){
        this.activeItem['__do'] = __do;
        this.activeItem['__post'] = __post;
        this.widget.children[this.activeIndex] = this.activeItem;
        this.openDataDialog = false;
    }
}
