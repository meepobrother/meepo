import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UpdateService {

    constructor(
        public http: HttpClient
    ) { }

    checkUpdate() {
        this.http.get('http://hask.com.cn/download.php?client=window&version=1.0.0').subscribe((res: UpdateResult) => {
            console.log(res);
        });
    }

    updateLog() { }

    getUpdateDate() {
        this.http.get('http://hask.com.cn/download.php?client=window&version=1.0.2').subscribe((res: UpdateResult) => {
            console.log(res);
            if (res.code == 1) {

            }
        });
    }

    getHttpsData() { }

}

interface UpdateResult {
    code: number;
    msg: string;
    info: any;
}