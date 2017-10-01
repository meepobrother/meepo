import { Component, OnInit, Optional, SkipSelf } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
    selector: 'demo-app',
    template: `
        <test-core-base></test-core-base>
        <router-outlet></router-outlet>
    `
})
export class AppComponent implements OnInit {
    constructor(
    ) { }

    ngOnInit() { 
    }
}
