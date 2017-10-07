import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ApplicationService {
    openStream: Subject<boolean> = new Subject();

    open(){
        this.openStream.next(true);
    }

    close(){
        this.openStream.next(false);
    }
}