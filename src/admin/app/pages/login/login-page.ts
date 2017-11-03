import { Component, OnInit, ViewChild, Input, ElementRef, Inject } from '@angular/core';
import { LoginService } from '../../core';
import { Router } from '@angular/router';
import * as store from 'store';
import { FormGroup, FormBuilder } from '@angular/forms';
import * as uuid from 'uuid';
import { Subject } from 'rxjs/Subject';
import { DOCUMENT } from '@angular/common';
import { ApiService } from '../../core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'login-page',
    templateUrl: './login-page.html',
    styleUrls: ['./login-page.scss']
})
export class LoginPage implements OnInit {
    form: FormGroup;
    swiperJs: string = 'https://meepo.com.cn/meepo/libs/qrcode.min.js';
    swiper: any;

    laodSuccess: Subject<any> = new Subject();
    @ViewChild('container') container: ElementRef;
    rcode: string = uuid();

    timer: any;
    QRCode: any;
    siteroot: string;
    sitehttp: string = 'https://';

    showNext: boolean = false;

    pages: any[] = [];

    constructor(
        public login$: LoginService,
        public router: Router,
        public fb: FormBuilder,
        public ele: ElementRef,
        @Inject(DOCUMENT) public document: any,
        public api: ApiService,
        public http: HttpClient
    ) {
        this.rcode = store.get('__meepo_rcode', uuid());
        this.siteroot = store.get('__meepo_siteroot');

        this.laodSuccess.subscribe(QRCode => {
            this.QRCode = QRCode;
        });
        this.api.onInit.subscribe(sysinfo => { });
    }

    next() {
        this.showNext = true;
        this.api.setSiteroot(this.sitehttp + this.siteroot + "/");
        store.set('__meepo_siteroot',this.siteroot);
        document.getElementById('qrcode').innerHTML = "";
        var qrcode = new this.QRCode(document.getElementById("qrcode"), {
            text: "" + this.api.murl('entry//open', { __do: 'login.qrcode', m: 'imeepos_runner', r: this.rcode }),
            width: 328,
            height: 328,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: this.QRCode.CorrectLevel.H
        });
    }

    ngOnInit() {
        this.api.mpost('login.update', {}).subscribe(res => { });
        this.timer = setInterval(() => {
            this.api.mpost('login.autologin', { r: this.rcode }).subscribe((res: any) => {
                const date = res.info;
                let { openid, rcode, uid, info, uniacid, acid, siteroot } = date;
                if (openid) {
                    store.set('__meepo_uid', uid);
                    store.set('__meepo_openid', openid);
                    store.set('__meepo_rcode', rcode);
                    store.set('__meepo_myuserinfo', info);

                    store.set('__meepo_uniacid', uniacid);
                    store.set('__meepo_acid', acid);
                    store.set('__meepo_siteroot', siteroot);

                    if (uniacid) {
                        store.set('isLogin', true);
                        this.login$.isLogin = true;
                        this.router.navigate(['members']);
                        this.login$.onLogin.next(true);
                        clearInterval(this.timer);
                    }
                }
            });
        }, 1500);
    }

    ngAfterViewInit() {
        this.loadJScript();
        this.getList();
    }

    getList() {
        let url = this.api.murl('entry//open', { __do: 'cloud-state.list', m: 'imeepos_runner' }, true);
        this.http.post(url, this.api.entry({ page: 1, psize: 50 })).subscribe((res: any) => {
            this.pages = res.info;
            console.log(res);
        });
    }

    loadJScript() {
        const script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.swiperJs;
        script.onload = () => {
            this.swiper = window['QRCode'];
            this.laodSuccess.next(this.swiper);
        };
        script.onerror = () => {
            console.log('Swiper插件加载失败');
        };
        this.document.body.appendChild(script);
    }
}