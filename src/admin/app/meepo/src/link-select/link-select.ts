import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PageSelect } from '../page-select/page-select';
@Component({
    selector: 'link-select',
    templateUrl: './link-select.html',
    styleUrls: ['./link-select.scss']
})
export class LinkSelect implements OnInit {
    @Input() widget: any;
    @Input() title: string;
    constructor(
        public dialog: MatDialog
    ) { }

    ngOnInit() { }

    selectLink() {
        let dialogRef = this.dialog.open(PageSelect);
        dialogRef.afterClosed().subscribe(link => {
            this.widget.link = link;
        });
    }
}