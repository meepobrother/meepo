import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'create-btn-dialog',
    templateUrl: './create-btn-dialog.html',
    styleUrls: ['./create-btn-dialog.scss']
})
export class CreateBtnDialog implements OnInit {
    widget: CreateBtnDefault = new CreateBtnDefault();
    constructor(
        public dialog: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.dialog.afterOpen().subscribe(() => {
            let { title, color, size, classObj, styleObj, action, style } = this.data || new CreateBtnDefault();
            this.widget.title = title;
            this.widget.color = color;
            this.widget.size = size;
            this.widget.classObj = classObj;
            this.widget.styleObj = styleObj;
            this.widget.action = action;
            this.widget.style = style;
        });
    }

    ngOnInit() { }

    close() {
        this.dialog.close();
    }

    open() {
        this.widget.styleObj = this.widget.styleObj || { 'margin-left': '3px'};
        this.dialog.close(this.widget);
    }
}


export class CreateBtnDefault {
    title: string = '标题';
    color: string = 'btn-primary';
    size: string = 'btn-xs';
    classObj: any = {
        'btn': true
    };
    styleObj: any = {
        'margin-left': '5px'
    }
    action: string = '';
    style: string = '';
}