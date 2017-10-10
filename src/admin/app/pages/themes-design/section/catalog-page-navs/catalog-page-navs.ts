import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPageDialog } from '../../dialog';
import { CatalogService } from '../catalog.service';
import { CatalogGroup } from '../model';
@Component({
    selector: 'catalog-page-navs',
    templateUrl: './catalog-page-navs.html',
    styleUrls: ['./catalog-page-navs.scss']
})
export class CatalogPageNavs implements OnInit {
    @Input() group: CatalogGroup = new CatalogGroup();
    @Output() onClickCata: EventEmitter<any> = new EventEmitter();

    constructor(
        public dialog: MatDialog,
        public service: CatalogService
    ) { }

    ngOnInit() { }

    removePage(page: any) {
        this.service.removePage(this.group,page)
    }

    edigePage(page: any) {
        const dialogRef = this.dialog.open(AddPageDialog, { data: page });
        dialogRef.afterClosed().subscribe((res) => {
            page = res;
        });
    }

}
