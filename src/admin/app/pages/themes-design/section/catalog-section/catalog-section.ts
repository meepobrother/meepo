import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { MatDialog } from '@angular/material';
@Component({
    selector: 'catalog-section',
    templateUrl: './catalog-section.html',
    styleUrls: ['./catalog-section.scss']
})
export class CatalogSection implements OnInit {
    @Input() items: any[] = [];
    constructor(
        public catalogService: CatalogService,
        public dialog: MatDialog
    ) { }

    ngOnInit() { }

    clearEvent(evt: any){
        evt.stopPropagation();
    }

    showAddGroupDialog(){

    }
}

