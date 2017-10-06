import { Component, OnInit, Input, HostBinding, ElementRef, ContentChild, AfterContentInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { Directive } from '@angular/core';

@Component({
    selector: 'cover-content',
    template: `
        <div class="content" [style.background-image]="_contentBg"></div>
        <ng-content></ng-content>
    `,
    styleUrls: [
        "./cover-content.scss"
    ]
})
export class CoverContent {
    _contentBg: string = '';
    setBg(val: string){
        this._contentBg = val;
    }
 }

@Component({
    selector: 'cover',
    templateUrl: './cover.html',
    styleUrls: ['./cover.scss']
})
export class CoverComponent implements OnInit, AfterContentInit {
    @HostBinding('style.background-image') _background: any = '';
    @ContentChild(CoverContent) _content: CoverContent;

    _contentBg: any = '';
    @Input() 
    set image(val: string){
        if(val){
            this._background = `url(${val})`;
        }
    }

    constructor() { }

    ngOnInit() { 
        
    }

    ngAfterContentInit(){
        this._content.setBg(this._background);
    }
}