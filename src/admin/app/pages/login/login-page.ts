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
import * as outils from 'outils';

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
    sitehttp: string = window.location.protocol + "//";

    showNext: boolean = false;

    pages: any[] = [];

    constructor(
        public login$: LoginService,
        public router: Router,
        public fb: FormBuilder,
        public ele: ElementRef,
        @Inject(DOCUMENT) public document: any,
        public http: HttpClient,
        public api: ApiService
    ) {
        let siteroot: string = '';
        if(window.location.search){
            let query = outils.parseQueryString();
            siteroot = query['siteroot'] || '';
        }
        this.rcode = store.get('__meepo_rcode', uuid());
        this.rcode = this.rcode ? this.rcode : uuid();
        this.siteroot = store.get('__meepo_siteroot', "meepo.com.cn");
        if(typeof this.siteroot != 'string'){
            this.siteroot = 'https://';
        }
        console.log(this.siteroot);
        this.siteroot = this.siteroot || this.siteroot.replace('https://', '');
        this.siteroot = this.siteroot || this.siteroot.replace('http://', '');
        this.siteroot = this.siteroot || this.siteroot.replace('/', '');
        this.siteroot = this.siteroot || this.siteroot.replace(this.sitehttp, '');
        this.laodSuccess.subscribe(QRCode => {
            this.QRCode = QRCode;
        });
        this.api.onInit.subscribe(sysinfo => {
            var qrcode = new this.QRCode(document.getElementById("qrcode"), {
                text: "" + this.api.murl('entry/site/open', { __do: 'login.qrcode', m: 'imeepos_runner', r: this.rcode }),
                width: 328,
                height: 328,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: this.QRCode.CorrectLevel.H
            });
            this.autoCheck();
        });
    }

    next() {
        this.showNext = true;
        this.api.setSiteroot(this.sitehttp + this.siteroot + '/');
        store.set('__meepo_siteroot', this.sitehttp + this.siteroot + '/');
        document.getElementById('qrcode').innerHTML = '';
        console.log(this.sitehttp);
        let url = this.sitehttp + this.siteroot + '/addons/imeepos_runner/oauth.php';
        console.log(this.siteroot);
        store.set('__meepo_sitehttp', this.sitehttp);
        if (this.sitehttp == 'http://') {
            this.api.mpost('cloud.getCloudUrl', { url: url }, 'imeepos_runner', true).subscribe((res: any) => {
                console.log(res);
                this.api.sysinfo.uniacid = res.info;
                this.api.sysinfo.acid = res.info;
                this.api.onInit.next(this.api.sysinfo);
            });
        } else {
            this.http.get(url).subscribe((res: any) => {
                this.api.sysinfo.uniacid = res.info;
                this.api.sysinfo.acid = res.info;
                this.api.onInit.next(this.api.sysinfo);
            });
        }
        console.log(url);
    }

    autoCheck() {
        this.timer = setInterval(() => {
            this.api.mpost('login.autologin', { r: this.rcode }).subscribe((res: any) => {
                const date = res.info;
                let { openid, rcode, uid, info, uniacid, acid, siteroot, account } = date;
                if (openid) {
                    store.set('__meepo_uid', uid);
                    store.set('__meepo_openid', openid);
                    store.set('__meepo_rcode', rcode);
                    store.set('__meepo_myuserinfo', info);
                    store.set('__meepo_uniacid', uniacid);
                    store.set('__meepo_acid', acid);
                    store.set('__meepo_siteroot', siteroot);
                    store.set('__meepo_account', account);
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

    ngOnInit() {
        this.api.mpost('login.update', {}).subscribe(res => { });

        console.log();

    }

    ngAfterViewInit() {
        this.loadJScript();
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