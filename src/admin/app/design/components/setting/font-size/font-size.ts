import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
    selector: 'font-size',
    templateUrl: './font-size.html',
    styleUrls: ['./font-size.scss']
})
export class FontSize implements OnInit {
    @Input() widget: any;
    constructor() { }
    ngOnInit() { }
}
