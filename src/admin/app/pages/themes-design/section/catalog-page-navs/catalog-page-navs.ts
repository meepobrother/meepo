import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPageDialog } from '../../dialog';
import { CatalogGroup } from '../model';
<<<<<<< HEAD
import { Store } from '@ngrx/store';
import * as actions from '../../../../ngrx/actions/catalog.action';

=======
import { WidgetService, CatalogService } from '../../../../design';
import { ApiService } from '../../../../core';
>>>>>>> master
@Component({
    selector: 'catalog-page-navs',
    templateUrl: './catalog-page-navs.html',
    styleUrls: ['./catalog-page-navs.scss']
})
export class CatalogPageNavs implements OnInit {
    @Input() group: CatalogGroup = new CatalogGroup();
<<<<<<< HEAD
=======
    @Input() list: any[] = [];

>>>>>>> master
    @Output() onClickPage: EventEmitter<any> = new EventEmitter();
    currentIndex: number;
    constructor(
        public dialog: MatDialog,
        public service: CatalogService,
<<<<<<< HEAD
        public store: Store<any>
=======
        public widget: WidgetService,
        public api: ApiService
>>>>>>> master
    ) { }

    ngOnInit() { }

    onClick(page: any, index: number) {
        this.currentIndex = index;
        page.type = page.type || 'layout';
        this.widget.setCurrentWidget(page);
        this.service.clickCataPage(this.group, page);
    }

    removePage(page: any) {
<<<<<<< HEAD
        const index = this.group.pages.indexOf(page);
        this.group.pages.splice(index, 1);
        this.store.dispatch(new actions.PageDeleteAction(this.group));
=======
        this.api.mpost('app.deleteAppCatalogPage',page).subscribe(()=>{
            this.onChange.emit();
        });
>>>>>>> master
    }

    edigePage(page: any, evt: Event) {
        const dialogRef = this.dialog.open(AddPageDialog, { data: page });
        dialogRef.afterClosed().subscribe((res) => {
<<<<<<< HEAD
            if(res){
                for (let i=0; i < this.group.pages.length; i++) {
                    if (this.group.pages[i].code === res.code) {
                        this.group.pages[i] = res;
                    }
                }
                this.store.dispatch(new actions.PageEditAction(this.group));
            }
=======
            this.api.mpost('app.editAppCatalogPage',res).subscribe(res=>{
                this.onChange.emit();
            })
>>>>>>> master
        });
        evt.preventDefault();
    }
}
