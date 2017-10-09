import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LayoutBody } from './layout-body';
import { LayoutFooter } from './layout-footer';
import { LayoutHeader } from './layout-header';
import { LayoutMenu } from './layout-menu';

@Injectable()
export class LayoutService {

    onBodyStream: Subject<LayoutBody> = new Subject();
    onFooterStream: Subject<LayoutFooter> = new Subject();
    onHeaderStream: Subject<LayoutHeader> = new Subject();
    onMenuStream: Subject<LayoutMenu> = new Subject();    
    
    onBody(body: LayoutBody){
        this.onBodyStream.next(body);
    }
    onFooter(footer: LayoutFooter ){
        this.onFooterStream.next(footer);
    }
    onHeader(header: LayoutHeader ){
        this.onHeaderStream.next(header);
    }
    onMenu(menu: LayoutMenu ){
        this.onMenuStream.next(menu);
    }
}