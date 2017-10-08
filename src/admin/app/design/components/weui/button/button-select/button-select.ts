import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Button } from '../button';
import { MatDialogRef } from '@angular/material';

@Component({
    selector: 'button-select',
    templateUrl: './button-select.html',
    styleUrls: ['./button-select.scss']
})
export class ButtonSelect {
    // 预设样式组合
    widgets: any[] = [
        btn1,
        btn2,
        btn3,
        btn4,
        btn5,
        btn6,
        btn7,
        btn8,
        btn9,
        new Button({'weui-btn_plain-default': true}),
        new Button('weui-btn weui-btn_plain-default weui-btn_plain-disabled'),
        new Button('weui-btn weui-btn_plain-primary'),
        new Button('weui-btn weui-btn_plain-primary weui-btn_plain-disabled'),
        new Button('weui-btn weui-btn_mini weui-btn_primary'),
        new Button('weui-btn weui-btn_mini weui-btn_default'),
        new Button('weui-btn weui-btn_mini weui-btn_warn')
    ];
    constructor(
        public dialogRef: MatDialogRef<any>
    ) { }
    select(item: any) {
        this.dialogRef.close(item);
    }
}

const btn1 = new Button({ 'weui-btn_primary': true });
const btn2 = new Button({ 'weui-btn_primary': true, 'weui-btn_loading': true }, 'weui-loading');
const btn3 = new Button('weui-btn weui-btn_disabled weui-btn_primary');
const btn4 = new Button('weui-btn weui-btn_default');
const btn5 = new Button('weui-btn weui-btn_default weui-btn_loading', 'weui-loading');
const btn6 = new Button('weui-btn weui-btn_disabled weui-btn_default');
const btn7 = new Button('weui-btn weui-btn_warn');
const btn8 = new Button('weui-btn weui-btn_warn weui-btn_loading', 'weui-loading');
const btn9 = new Button('weui-btn weui-btn_disabled weui-btn_warn');



