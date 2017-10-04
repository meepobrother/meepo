import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core';
import { Router } from '@angular/router';
import * as store from 'store';
@Component({
    selector: 'login-page',
    templateUrl: './login-page.html',
    styleUrls: ['./login-page.scss']
})
export class LoginPage implements OnInit {
    constructor(
        public login$: LoginService,
        public router: Router
    ) { }

    ngOnInit() { }

    login(){
        this.login$.isLogin = true;
        this.login$.onLogin.next(true);
        store.set('isLogin',true);
        this.router.navigate(['/members'])
    }

    cancel(){
        this.login$.isLogin = false;
    }
}