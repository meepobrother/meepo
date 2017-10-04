import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
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
}