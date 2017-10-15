import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
<<<<<<< HEAD
import { LayoutBody } from './layout-body';
import { LayoutFooter } from './layout-footer';
import { LayoutHeader } from './layout-header';
import { LayoutMenu } from './layout-menu';
import { LayoutWidget } from './widget';


import { WidgetService } from '../../services';
=======
import {
    LayoutBody, LayoutFooter, LayoutHeader,
    LayoutMenu, LayoutWidget
} from '../../classes';
>>>>>>> master
@Injectable()
export class LayoutService {

    onChange: Subject<LayoutWidget> = new Subject();

<<<<<<< HEAD
    constructor(
        public widget: WidgetService
    ){}

    setCurrentWidget(widget: any){
        this.widget.setCurrentWidget(widget);
    }
    
    onBody(body: LayoutBody){
=======
    onBody(body: LayoutBody) {
>>>>>>> master
        this.onChange.next(body);
        this.setCurrentWidget(body);
    }
    onFooter(footer: LayoutFooter) {
        this.onChange.next(footer);
        this.setCurrentWidget(footer);
    }
    onHeader(header: LayoutHeader) {
        this.onChange.next(header);
        this.setCurrentWidget(header);
    }
    onMenu(menu: LayoutMenu) {
        this.onChange.next(menu);
        this.setCurrentWidget(menu);
    }
}