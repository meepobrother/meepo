import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddPageDialog } from '../../dialog';
import { CatalogService } from '../catalog.service';
import { CatalogGroup } from '../model';
import { WidgetService } from '../../../../design';
import { ApiService } from '../../../../core';
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
        public service: CatalogService,
        public widget: WidgetService,
        public api: ApiService
    ) { }

    ngOnInit() { }

    onClick(page: any, index: number) {
        this.currentIndex = index;
        page.type = page.type || 'layout';
        this.widget.setCurrentWidget(page);
        this.service.clickCataPage(this.group, page);
    }

    removePage(page: any) {
        this.api.mpost('app.deleteAppCatalogPage',page).subscribe(()=>{
            this.onChange.emit();
        });
    }

    edigePage(page: any, evt: Event) {
        const dialogRef = this.dialog.open(AddPageDialog, { data: page });
        dialogRef.afterClosed().subscribe((res) => {
            this.api.mpost('app.editAppCatalogPage',res).subscribe(res=>{
                this.onChange.emit();
            })
        });
        evt.preventDefault();
    }

}
