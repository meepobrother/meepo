import { Injectable } from '@angular/core';
import { ApiService } from '../../core';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SettingService {
    constructor(
        public api: ApiService
    ) { }

    get(date: any): Observable<SettingDate> {
        return Observable.create((observer) => {
            this.api.mpost('setting.getSetting', date).subscribe((res: ResultDate) => {
                console.log(res);
                observer.next(res.info);
                observer.complete();
            });
        });
    }

    save(date: any): Observable<SettingDate> {
        return Observable.create((observer) => {
            this.api.mpost('setting.saveSetting', date).subscribe((res: ResultDate) => {
                observer.next(res.info);
                observer.complete();
            });
        });
    }
}

export interface SettingDate {
    code: string;
    data: any;
}

export interface ResultDate{
    code: string;
    msg: string;
    info: SettingDate;
}