import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export interface DragData{
    tag: string;
    data: any;
}
@Injectable()
export class DragDropService {
}

 