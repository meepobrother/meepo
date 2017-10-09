import { Component, OnInit, HostListener, Input } from '@angular/core';
import { LayoutService } from '../../layout.service';
import { LayoutFooter } from '../layout-footer';
@Component({
    selector: 'layout-footer-view',
    templateUrl: './layout-footer-view.html',
    styleUrls: ['./layout-footer-view.scss']
})
export class LayoutFooterView implements OnInit {
    @Input() widget: LayoutFooter = new LayoutFooter();
    @HostListener('click',['$event'])
    onClick(evt: any){
        this.layout.onFooter(this.widget);
    }
    constructor(
        public layout: LayoutService
    ) { }

    ngOnInit() { }
}