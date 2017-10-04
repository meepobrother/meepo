import { Component, OnInit } from '@angular/core';
import { DropdownService } from '../dropdown.service';

@Component({
    selector: 'dropdown',
    templateUrl: './dropdown.html',
    styleUrls: ['./dropdown.scss'],
    providers: [
        DropdownService
    ]
})
export class Dropdown implements OnInit {
    constructor() { }

    ngOnInit() { }
}

