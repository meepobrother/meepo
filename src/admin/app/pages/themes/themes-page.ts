import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import * as store from 'store';
import { ApiService } from '../../core';
@Component({
    selector: 'themes-page',
    templateUrl: './themes-page.html',
    styleUrls: ['./themes-page.scss']
})
export class ThemesPage implements OnInit {
    constructor(
        public dialog: MatDialog,
        public api: ApiService
    ) { }

    ngOnInit() { }

    
}