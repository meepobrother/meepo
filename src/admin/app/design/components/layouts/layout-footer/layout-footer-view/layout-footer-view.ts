import { Component, OnInit, HostListener, Input, HostBinding, OnChanges, SimpleChanges } from '@angular/core';
import { LayoutService } from '../../layout.service';
import { LayoutFooter } from '../../../../classes';
import { WidgetService, CatalogService } from '../../../../services';
import { ApiService } from '../../../../../core';

@Component({
    selector: 'layout-footer-view',
    templateUrl: './layout-footer-view.html',
    styleUrls: ['./layout-footer-view.scss']
})
export class LayoutFooterView implements OnInit, OnChanges {
    @Input() widget: LayoutFooter = new LayoutFooter();
    @HostBinding('class.active') _active: boolean = false;
    activeStyle: any;
    @HostListener('mouseover',['$event'])
    onClick(evt: any){
        this.layout.onFooter(this.widget);
        this.widget$.setCurrentWidget(this.widget);
    }

    @HostBinding('class.layout-footer') _footer: boolean = true;
    constructor(
        public layout: LayoutService,
        public widget$: WidgetService,
        public api: ApiService,
        public catalogService: CatalogService
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

    ngOnChanges(changes: SimpleChanges){
        const widget = changes['widget'].currentValue;
        this.activeStyle = widget['activeStyle'];
    }

    onItem(item: any){
        // get page
        if(item.link > 0){
            this.api.mpost('app.getAppCatalogPage',{id: item.link}).subscribe((res: any)=>{
                // this.widget$.setCurrentWidget(res.info);
                this.catalogService.setCurrentPageStream.next(res.info);
                console.log(res.info);
            });
        }
    }
}