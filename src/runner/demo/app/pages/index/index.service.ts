import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '@meepo/core';
@Injectable()
export class IndexService {
    constructor(
        public api: ApiService
    ) { }
    getData(): Observable<any> {
        return Observable.create(observer => {
            this.api.mget('pages.index').subscribe(setting => {
                observer.next(setting);
                observer.complete(setting);
            })
        });
    }
}