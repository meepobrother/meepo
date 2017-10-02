import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'admin-root',
    template: `
        <admin-header></admin-header>
        <router-outlet></router-outlet>
    `
})
export class AdminComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}

