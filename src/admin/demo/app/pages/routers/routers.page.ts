import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'routers-page',
    templateUrl: './routers.page.html',
    styleUrls: ['./routers.page.scss']
})
export class RoutersPage implements OnInit {
    isCollapsed: boolean = false;
    constructor() { }

    ngOnInit() { }
}