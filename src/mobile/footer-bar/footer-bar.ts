import {
    Component, OnInit, Input, HostBinding,
    ViewEncapsulation, ContentChild,
    AfterContentInit,
} from '@angular/core';

import { FooterBarOutlet } from './footer-bar-outlet';
@Component({
    selector: 'footer-bar,[footer-bar]',
    templateUrl: 'footer-bar.html',
    styleUrls: ['footer-bar.css'],
    encapsulation: ViewEncapsulation.None
})
export class FooterBar implements OnInit, AfterContentInit {
    @HostBinding('class.footer-bar-container') _container: boolean = true;
    @ContentChild(FooterBarOutlet) footer: FooterBarOutlet;
    @Input() items: any[] = [];
    constructor() { }
    ngOnInit() { }
    ngAfterContentInit() {
        console.log(this.items);
        console.log(this.footer);
    }
}
