import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { ComponentPortal } from '@angular/cdk/portal';
import { Widget } from '../classes';
@Injectable()
export class WidgetService {
    list: Map<string, any> = new Map();
    currentWidget: any = new Widget();

    onChange: Subject<any> = new Subject();
    get dates() {
        const results = [];
        this.list.forEach(res => {
            results.push(res);
        });
        return results;
    }

    removeWidget(id: string) {
        this.list.delete(id);
    }

    addWidget(id: string,res) {
        this.list.set(id, new ComponentPortal(res));
    }

    setCurrentWidget(item: any){
        console.log('setCurrentWidget',item);
        this.currentWidget = item;
        console.log(item);
        this.onChange.next(this.currentWidget);
    }
}