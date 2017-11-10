import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

export interface DragData {
    tag: string; // 多级拖拽
    data: any; // 数据
}

@Injectable()
export class DragDropService {
    // 总能记住 上传一次的值
    private _dragData = new BehaviorSubject<DragData>(null);

    setDragData(dragData: DragData){
        this._dragData.next(dragData);
    }

    getDragData(): Observable<DragData>{
        return this._dragData.asObservable();
    }

    clearDragData(){
        this._dragData.next(null);
    }
}

 