import { Component, OnInit, HostListener, Input, HostBinding } from '@angular/core';
import { LayoutService } from '../../layout.service';
import { LayoutBody } from '../../../../classes';
import 'rxjs/add/operator/debounceTime';
import { WidgetService } from '../../../../services/widget.service';

@Component({
    selector: 'layout-body-view',
    templateUrl: './layout-body-view.html',
    styleUrls: ['./layout-body-view.scss']
})
export class LayoutBodyView implements OnInit {
    @Input() widget: LayoutBody = new LayoutBody();
    @HostBinding('class.layout-body') _body: boolean = true;
    @HostBinding('class.active') _active: boolean = false;
    
    @HostListener('click',['$event'])
    click(evt: any){
        this.layout.onBody(this.widget);
        this.widget$.setCurrentWidget(this.widget);
    }

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