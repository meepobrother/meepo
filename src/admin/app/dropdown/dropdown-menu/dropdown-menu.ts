import { Component, OnInit, HostBinding } from '@angular/core';
import { DropdownService } from '../dropdown.service';
@Component({
    selector: 'dropdown-menu',
    templateUrl: './dropdown-menu.html',
    styleUrls: ['./dropdown-menu.scss']
})
export class DropdownMenu implements OnInit {
    @HostBinding('class.dropdown-menu') _dropdown: boolean = true;
    @HostBinding('style.display') _display: string = 'none';
    constructor(
        public service$: DropdownService
    ) { }

    ngOnInit() { 
        this.service$.onOpen.subscribe(res=>{
            this._display = res;
        });
    }
}

