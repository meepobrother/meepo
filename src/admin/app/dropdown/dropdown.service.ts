import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DropdownsService } from './dropdowns.service';
import * as uuid from 'uuid';
@Injectable()
export class DropdownService {
    onOpen: Subject<string> = new Subject();
    onActive: Subject<boolean> = new Subject();

    _open: boolean = false;
    _active: boolean = false;

    id: string;
    constructor(
        public dropdowns: DropdownsService
    ) {
        this.id = uuid();
        this.dropdowns.addDropdown(this.id, this);
    }

    open() {
        this.onOpen.next('block');
        this.onActive.next(true);
        this._open = true;
        this._active = true;
    }

    close() {
        this.onOpen.next('none');
        this.onActive.next(false);
        this._open = false;
        this._active = false;
    }
}