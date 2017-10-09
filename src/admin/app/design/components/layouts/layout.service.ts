import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LayoutBody } from './layout-body';
import { LayoutFooter } from './layout-footer';
import { LayoutHeader } from './layout-header';
import { LayoutMenu } from './layout-menu';
import { LayoutWidget } from './widget';
@Injectable()
export class LayoutService {

    onChange: Subject<LayoutWidget> = new Subject();
    
    onBody(body: LayoutBody){
        this.onChange.next(body);
    }
    onFooter(footer: LayoutFooter ){
        this.onChange.next(footer);
    }
    onHeader(header: LayoutHeader ){
        this.onChange.next(header);
    }
    onMenu(menu: LayoutMenu ){
        this.onChange.next(menu);
    }
}