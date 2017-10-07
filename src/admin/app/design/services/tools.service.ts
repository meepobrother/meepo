import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import uuid from 'uuid';
@Injectable()
export class ToolsService {
    showAlertTipStream: Subject<any> = new Subject();
    showModalTipStream: Subject<any> = new Subject();

    constructor() { }

    cloneJSON(e: any) {
        return "object" != typeof e || null == e ? e : JSON.parse(JSON.stringify(e))
    }

    getUniqueId() {
        return "meepo_" + Math.round(Math.random() * Math.pow(10, 10))
    }

    getUniqueVesselId() {
        return "list-" + Math.round(Math.random() * Math.pow(10, 12))
    }
    // alert tip
    alertTip(content: string, time?: number) {
        this.showAlertTipStream.next({
            content: content,
            lastTime: time
        });
    }
    // modal tip
    modalTip(content: string, time?: number) {
        this.showModalTipStream.next({
            content: content,
            stream: time
        });
    }
}