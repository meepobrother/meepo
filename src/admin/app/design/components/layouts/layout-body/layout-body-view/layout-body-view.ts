import { Component, OnInit, HostListener } from '@angular/core';
import { LayoutService } from '../../layout.service';
@Component({
    selector: 'layout-body-view',
    templateUrl: './layout-body-view.html',
    styleUrls: ['./layout-body-view.scss']
})
export class LayoutBodyView implements OnInit {
    @HostListener('click',['$event'])
    onClick(evt: any){}
    constructor(
        public layout: LayoutService
    ) { }

    ngOnInit() { }
}