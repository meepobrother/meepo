import { Component, OnInit, HostListener, Input, HostBinding } from '@angular/core';
import { LayoutService } from '../../layout.service';
import { LayoutFooter } from '../layout-footer';
import { WidgetService } from '../../../../services';

@Component({
    selector: 'layout-footer-view',
    templateUrl: './layout-footer-view.html',
    styleUrls: ['./layout-footer-view.scss']
})
export class LayoutFooterView implements OnInit {
    @Input() widget: LayoutFooter = new LayoutFooter();
    @HostBinding('class.active') _active: boolean = false;
    
    @HostListener('click',['$event'])
    onClick(evt: any){
        this.layout.onFooter(this.widget);
        this.widget$.setCurrentWidget(this.widget);
    }

    @HostBinding('class.layout-footer') _footer: boolean = true;
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