import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPageDialog } from '../../dialog';
import { CatalogService } from '../catalog.service';
import { CatalogGroup } from '../model';
import { Store } from '@ngrx/store';
import * as actions from '../../../../ngrx/actions/catalog.action';

@Component({
    selector: 'catalog-page-navs',
    templateUrl: './catalog-page-navs.html',
    styleUrls: ['./catalog-page-navs.scss']
})
export class CatalogPageNavs implements OnInit {
    @Input() group: CatalogGroup = new CatalogGroup();
    @Output() onClickPage: EventEmitter<any> = new EventEmitter();
    currentIndex: number;
    constructor(
        public dialog: MatDialog,
        public service: CatalogService,
        public store: Store<any>
    ) { }

    ngOnInit() { }

    onClick(page: any, index: number) {
        this.currentIndex = index;
        this.service.clickCataPage(this.group, page);
    }

    removePage(page: any) {
        const index = this.group.pages.indexOf(page);
        this.group.pages.splice(index, 1);
        this.store.dispatch(new actions.PageDeleteAction(this.group));
    }

    edigePage(page: any, evt: Event) {
        const dialogRef = this.dialog.open(AddPageDialog, { data: page });
        dialogRef.afterClosed().subscribe((res) => {
            if(res){
                for (let i=0; i < this.group.pages.length; i++) {
                    if (this.group.pages[i].code === res.code) {
                        this.group.pages[i] = res;
                    }
                }
                this.store.dispatch(new actions.PageEditAction(this.group));
            }
        });
        evt.preventDefault();
    }
}
