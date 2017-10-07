import { Component, OnInit } from '@angular/core';
import { ThemesListFreeService } from './themes-list-free.service';
@Component({
    selector: 'themes-list-free',
    templateUrl: './themes-list-free.html',
    styleUrls: ['./themes-list-free.scss']
})
export class ThemesListFree implements OnInit {
    constructor(
        public api: ThemesListFreeService
    ) { }

    ngOnInit() { }
}