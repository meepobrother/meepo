import { Component, OnInit, Input, Directive, TemplateRef, ContentChild, AfterContentInit } from '@angular/core';

@Directive({
    selector: '[navTabPaneRef]'
})
export class NavTabPaneRef{
    constructor(
        public templateRef: TemplateRef<any>
    ){}
}


@Component({
    selector: 'nav-tab-pane',
    templateUrl: './nav-tab-pane.html',
    styleUrls: ['./nav-tab-pane.scss'],
    providers: []
})
export class NavTabPane implements OnInit, AfterContentInit {
    @Input() active: boolean = false;
    @Input() title: string;
    @Input() icon: string;

    @ContentChild(NavTabPaneRef) paneRef: NavTabPaneRef;

    constructor() { }

    ngOnInit() { }

    ngAfterContentInit(){
        
    }

    unActive() {
        this.active = false;
    }

    doActive() {
        this.active = true;
    }
}


