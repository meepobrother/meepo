import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ThemesAdd } from './themes-add';
import * as store from 'store';
import { ThemesMineService } from './themes-mine.service';
@Component({
    selector: 'themes-page',
    templateUrl: './themes-page.html',
    styleUrls: ['./themes-page.scss']
})
export class ThemesPage implements OnInit {
    constructor(
        public dialog: MatDialog,
        public mine: ThemesMineService
    ) { }

    ngOnInit() { }

    createThemes() {
        const dialogRef = this.dialog.open(ThemesAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.mine.add(res);
            }
        });
    }
}