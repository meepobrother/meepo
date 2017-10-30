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
    myThemes: any;
    themesShops: any;

    father: any;
    tabs: any;
    
    constructor(
        public dialog: MatDialog,
        public api: ApiService
    ) { }

    ngOnInit() {
        // this.father = this;
    }

    onThemesShopsInit(e: any) {
        this.themesShops = e;
        console.log(this.themesShops);
        this.father = { myThemes: this.myThemes, themesShops: this.themesShops };
    }

    navTabsInit(e: any){
        this.tabs = e;
    }

    onMyThemesInit(e: any) {
        this.myThemes = e;
        console.log(this.myThemes);
        this.father = { myThemes: this.myThemes, themesShops: this.themesShops };
    }
}