import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'moneys-page',
    templateUrl: './moneys-page.html',
    styleUrls: ['./moneys-page.scss']
})
export class MoneysPage implements OnInit {
    list: any[] = [];
    constructor() { }

    ngOnInit() { }
}

