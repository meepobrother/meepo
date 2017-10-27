import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'icon-link-select',
    templateUrl: './icon-link-select.html',
    styleUrls: ['./icon-link-select.scss']
})
export class IconLinkSelect implements OnInit {
    @Input() widget: IconLinkDefault = new IconLinkDefault();
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialogRef<any>
    ) { }

    ngOnInit() { }

    selectIcon(){}

    selectLink(){}

    save(){
        this.dialog.close(this.widget);
    }

    cancel(){
        this.dialog.close();
    }

}

export class IconLinkDefault {
    title: string = '';
    icon: string = '';
    link: string = '';
}