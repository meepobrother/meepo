import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'blank',
    templateUrl: './blank.html',
    styleUrls: ['./blank.scss']
})
export class Blank implements OnInit {
    @Input() title: string;
    constructor() { }

    ngOnInit() { }
}