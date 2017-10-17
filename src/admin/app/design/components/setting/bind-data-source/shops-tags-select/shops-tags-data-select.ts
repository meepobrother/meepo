import { Component, OnInit } from '@angular/core';
import { ShopsTagsService } from '../../../../../pages/shops/shops-tags/shops-tags.service';
import { MatDialog } from '@angular/material';
@Component({
    selector: 'shops-tags-data-select',
    templateUrl: './shops-tags-data-select.html',
    styleUrls: ['./shops-tags-data-select.scss']
})
export class ShopsTagsDataSelect implements OnInit {
    constructor(
        public api: ShopsTagsService,
        public dialog: MatDialog
    ) { }

    ngOnInit() { 
        this.api.getList();
    }
}