import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'uploader-btns',
    templateUrl: "./uploader-btns.html"
})
export class UploaderBtns implements OnInit {
    constructor( ) { }

    ngOnInit(){ 
        // util.image('','');
    }
}