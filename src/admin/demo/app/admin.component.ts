import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'admin-root',
    template: `
        <router-outlet></router-outlet>
    `
})
export class AdminComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}

