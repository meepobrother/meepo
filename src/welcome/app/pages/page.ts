import { HostBinding } from '@angular/core';

export class PageBase{
    @HostBinding('class.page-container') _page: boolean = true;
    constructor(){

    }
}