import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class SidebarContainerService {
    _open: boolean = true;
    onOpen: Subject<string> = new Subject();

    open(){
        this.onOpen.next('220px');
    }

    close(){
        this.onOpen.next('70px');
    }
}