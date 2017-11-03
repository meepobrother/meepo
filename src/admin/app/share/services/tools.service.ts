// 完成

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import uuid from 'uuid';
@Injectable()
export class ToolsService {
    showAlertTipStream: Subject<any> = new Subject();
    showModalTipStream: Subject<any> = new Subject();
    autoLogoutStream: Subject<any> = new Subject();

    constructor() { }

    getQueryString(e: any) {
        var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)")
            , n = window.location.search.substr(1).match(t);
        return null != n ? decodeURIComponent(n[2]) : ""
    }

    cloneJSON(e: any) {
        return "object" != typeof e || null == e ? e : JSON.parse(JSON.stringify(e))
    }

    modifyPostParam(e: any) {
        var t, n, i, r, o, s, a, c = "";
        for (t in e)
            if (n = e[t],
                n instanceof Array)
                for (a = 0; a < n.length; ++a)
                    o = n[a],
                        i = t + "[" + a + "]",
                        s = {},
                        s[i] = o,
                        c += this.modifyPostParam(s) + "&";
            else if (n instanceof Object)
                for (r in n)
                    o = n[r],
                        i = t + "[" + r + "]",
                        s = {},
                        s[i] = o,
                        c += this.modifyPostParam(s) + "&";
            else
                void 0 !== n && null !== n && (c += encodeURIComponent(t) + "=" + encodeURIComponent(n) + "&");
        return c.length ? c.substr(0, c.length - 1) : c
    }

    getUniqueId() {
        return "zhichi_" + Math.round(Math.random() * Math.pow(10, 10))
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