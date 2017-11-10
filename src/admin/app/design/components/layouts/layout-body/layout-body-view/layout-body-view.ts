import { Component, OnInit, HostListener, Input, HostBinding } from '@angular/core';
import { LayoutService } from '../../layout.service';
import { LayoutBody } from '../../../../classes';
import 'rxjs/add/operator/debounceTime';
import { WidgetService } from '../../../../../share/services/widget.service';
import { WIDGETS } from '../../../../classes/widgets';

@Component({
    selector: 'layout-body-view',
    templateUrl: './layout-body-view.html',
    styleUrls: ['./layout-body-view.scss']
})
export class LayoutBodyView implements OnInit {
    @Input() widget: LayoutBody = new LayoutBody();
    @HostBinding('class.layout-body') _body: boolean = true;
    @HostBinding('class.active') _active: boolean = false;

    @HostListener('click', ['$event'])
    click(evt: any) {
        this.layout.onBody(this.widget);
        this.widget$.setCurrentWidget(this.widget);
    }

    widget$: WidgetService;
    constructor(
        public layout: LayoutService,
        public widgetService: WidgetService
    ) {
        this.widget$ = this.widgetService.getWidgetInstance();
        this.layout.onChange.debounceTime(300).subscribe(res => {
            if (res === this.widget) {
                this._active = true;
            } else {
                this._active = false;
            }
        });
    }

    ngOnInit() { }

    onDropWidget(widget: any, index: number) {
        if (widget.data) {
            console.log('放在widget后面' + index, widget);
            if(widget.tag == 'widget-new'){
                widget.data = new WIDGETS[widget.data.type]();
            }
            let old = this.widget.children.indexOf(widget.data);            
            this.widget.children.splice(index + 1, 0, widget.data);
            console.log('老的' + old, widget.data);
            if (old >= 0) {
                this.widget.children.splice(old, 1);
            }
            console.log(this.widget.children);
        }
    }
}