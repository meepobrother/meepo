import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SidebarContainerService {
    _open: boolean = true;
    onOpen: Subject<string> = new Subject();
    fxHide: boolean = false;
    
    open(){
        this.onOpen.next('2');
        this._open = true;
    }

    close(){
        this.onOpen.next('1');
        this._open = false;
    }
}