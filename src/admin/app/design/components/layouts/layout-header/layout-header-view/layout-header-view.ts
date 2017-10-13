import { Component, OnInit, HostListener, Input, HostBinding } from '@angular/core';

import { LayoutService } from '../../layout.service';
import { LayoutHeader } from '../layout-header';
import { WidgetService } from '../../../../services';


@Component({
    selector: 'layout-header-view',
    templateUrl: './layout-header-view.html',
    styleUrls: ['./layout-header-view.scss']
})
export class LayoutHeaderView implements OnInit {
    @Input() widget: LayoutHeader = new LayoutHeader();
    @HostBinding('class.active') _active: boolean = false;
    
    @HostListener('click',['$event'])
    onClick(evt: any){
        this.layout.onHeader(this.widget);
        this.widget$.setCurrentWidget(this.widget);
    }

    @HostBinding('class.layout-header') _header: boolean = true;
    constructor(
        public layout: LayoutService,
        public widget$: WidgetService
    ) { 
        this.layout.onChange.debounceTime(300).subscribe(res=>{
            if(res === this.widget){
                this._active = true;
            }else{
                this._active = false;
            }
        });
    }

    ngOnInit() { }
}