import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ApplicationService {
    openStream: Subject<boolean> = new Subject();
    _open: boolean = false;
    open(){
        this._open = true;
        this.openStream.next(true);
    }

    close(){
        this._open = false;
        this.openStream.next(false);
    }
}