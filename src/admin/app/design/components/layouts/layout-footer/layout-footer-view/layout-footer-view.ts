import { Component, OnInit, HostListener, Input, HostBinding, OnChanges, SimpleChanges } from '@angular/core';
import { LayoutService } from '../../layout.service';
import { LayoutFooter } from '../../../../classes';
import { WidgetService } from '../../../../services';
import { ApiService } from '../../../../../core';
import { CatalogService } from '../../../../services';

@Component({
    selector: 'layout-footer-view',
    templateUrl: './layout-footer-view.html',
    styleUrls: ['./layout-footer-view.scss']
})
export class LayoutFooterView implements OnInit, OnChanges {
    @Input() widget: LayoutFooter = new LayoutFooter();
    @HostBinding('class.active') _active: boolean = false;
    activeStyle: any;
    @HostListener('click',['$event'])
    onClick(evt: any){
        this.layout.onFooter(this.widget);
        this.widget$.setCurrentWidget(this.widget);
    }

    @HostBinding('class.layout-footer') _footer: boolean = true;
    constructor(
        public layout: LayoutService,
        public widget$: WidgetService,
        public api: ApiService,
        public CatalogService: CatalogService
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
        this.api.mpost('app.getAppCatalogPage',{id: item.link}).subscribe((res: any)=>{
            this.widget$.setCurrentWidget(res.info);
        });
        console.log(item);
        // this.widget.children.map(res=>{
        //     res['active'] = false;
        //     res['style'] = null;
        // });
        // item['active'] = true;
        // item['style'] = this.widget['activeStyle'];
    }
}