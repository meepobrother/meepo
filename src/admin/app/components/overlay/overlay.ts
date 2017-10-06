import { Component, OnInit, Directive, HostBinding, ViewEncapsulation, HostListener, ContentChild } from '@angular/core';

@Component({
    selector: 'overlay-panel',
    template: `
        <ng-content></ng-content>
    `
})
export class OverlayPanelComponent implements OnInit {
    @HostBinding('class.overlay-panel') _panel: boolean = true;
    @HostBinding('class.overlay-background') _background: boolean = true;
    @HostBinding('class.overlay-center') _center: boolean = true;
    @HostBinding('class.animated') _animated: boolean = true;
    @HostBinding('class.fadeIn') _fadeIn: boolean = false;
    @HostBinding('class.fadeOut') _fadeOut: boolean = false;

    @HostListener('mouseout',['$event'])
    mouseout(){
        this._fadeOut = true;
        this._fadeIn = false;
    }

    @HostListener('mouseover',['$event'])
    mouseover(){
        this._fadeOut = false;
        this._fadeIn = true;
    }

    constructor() { }

    ngOnInit() { }
}

@Component({
    selector: 'overlay',
    templateUrl: './overlay.html',
    styleUrls: ['./overlay.scss'],
    encapsulation: ViewEncapsulation.None
})
export class OverlayComponent implements OnInit {

    @ContentChild(OverlayPanelComponent) _panel: OverlayPanelComponent;
    @HostBinding('class.overlay') _overlay: boolean = true;
    @HostListener('mouseout',['$event'])
    mouseout(){
        this._panel.mouseout();
    }

    @HostListener('mouseover',['$event'])
    mouseover(){
        this._panel.mouseover();
    }
    constructor() { }
    ngOnInit() { }


}


