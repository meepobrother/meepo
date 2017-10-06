import { Component, OnInit, HostBinding, HostListener, Input } from '@angular/core';
import { DropdownService } from '../dropdown.service';
import { DropdownsService } from '../dropdowns.service';


@Component({
    selector: 'dropdown-toggle',
    templateUrl: './dropdown-toggle.html',
    styleUrls: ['./dropdown-toggle.scss']
})
export class DropdownToggle implements OnInit {
    @HostBinding('class.active') _active: boolean = false;

    @HostListener('click', ['$event'])
    click(evt: any) {
        this.services$.toggle(this.service$.id);
    }

    @Input() title: string;
    constructor(
        public service$: DropdownService,
        public services$: DropdownsService,

    ) { }

    ngOnInit() {
        this.service$.onActive.subscribe(res => {
            this._active = res;
        });
    }
}

