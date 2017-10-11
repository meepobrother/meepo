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
    @Input() list: any[] = [];
    @Output() onClickPage: EventEmitter<any> = new EventEmitter();
    @Output() onChange: EventEmitter<any> = new EventEmitter();

    currentIndex: number;
    constructor(
        public dialog: MatDialog,
        public service: CatalogService
    ) { }

    ngOnInit() { }

    onClick(page: any, index: number) {
        this.currentIndex = index;
        this.service.clickCataPage(this.group, page);
        this.onChange.emit();
    }

    removePage(page: any) {
        const index = this.group.pages.indexOf(page);
        this.group.pages.splice(index, 1);
        this.onChange.emit();
    }

    edigePage(page: any, evt: Event) {
        const dialogRef = this.dialog.open(AddPageDialog, { data: page });
        dialogRef.afterClosed().subscribe((res) => {
            for (let i; i < this.group.pages.length; i++) {
                if (this.group.pages[i].code = res.code) {
                    this.group.pages[i] = res;
                }
            }
            this.onChange.emit();
        });
        evt.preventDefault();
    }

}
