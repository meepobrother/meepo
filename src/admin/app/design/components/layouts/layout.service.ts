import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {
    LayoutBody, LayoutFooter, LayoutHeader,
    LayoutMenu, LayoutWidget
} from '../../classes';
@Injectable()
export class LayoutService {

    onChange: Subject<LayoutWidget> = new Subject();

    onBody(body: LayoutBody) {
        this.onChange.next(body);
    }
    onFooter(footer: LayoutFooter) {
        this.onChange.next(footer);
    }
    onHeader(header: LayoutHeader) {
        this.onChange.next(header);
    }
    onMenu(menu: LayoutMenu) {
        this.onChange.next(menu);
    }
}