import { Component, OnInit } from '@angular/core';
import { ShopsTagsService } from '../../../../pages/shops/shops-tags/shops-tags.service';
import { MatDialog } from '@angular/material';
@Component({
    selector: 'shops-group-data-select',
    templateUrl: './shops-group-data-select.html',
    styleUrls: ['./shops-group-data-select.scss']
})
export class ShopsGroupDataSelect implements OnInit {
    constructor(
        public api: ShopsTagsService,
        public dialog: MatDialog
    ) { }

    ngOnInit() { 
        this.api.getList();
    }
}