import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as store from 'store';
import { ApiService } from './api';
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

    checkLogin() {
        this.api.mpost('member.testlogin', {}).subscribe(res => {
            console.log(res);
        });
    }

    loginWidthUsernamePassword(username: string, password: string) {
        this.api.mpost('member.login', { username: username, password: password }).subscribe(res => {
            console.log('登陆结果', res);
        });
    }

    constructor(
        public api: ApiService
    ) {
        const isLogin = store.get('isLogin');
        if (isLogin) {
            this.isLogin = true;
            this.onLogin.next(true);
        }
    }
}