import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as store from 'store';

@Injectable()
export class LoginService {
    isLogin: boolean = false;
    uid: string;
    openid: string;
    avatar: string;
    nickname: string;

    onLogin: Subject<any> = new Subject();

    login(openid: string) {

    }

    constructor() {
        const isLogin = store.get('isLogin');
        if (isLogin) {
            this.isLogin = true;
            this.onLogin.next(true);
        }
    }
}