import { Component, OnInit, HostListener, Input } from '@angular/core';
import { LayoutService } from '../../layout.service';
import { LayoutBody } from '../layout-body';
@Component({
    selector: 'layout-body-view',
    templateUrl: './layout-body-view.html',
    styleUrls: ['./layout-body-view.scss']
})
export class LayoutBodyView implements OnInit {
    @Input() widget: LayoutBody = new LayoutBody();
    @HostListener('click',['$event'])
    onClick(evt: any){
        this.layout.onBody(this.widget);
    }
    constructor(
        public layout: LayoutService
    ) { }

    ngOnInit() { }
}