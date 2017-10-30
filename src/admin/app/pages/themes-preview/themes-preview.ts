import {
    Component, OnInit, ViewChild, AfterViewInit,
    Inject, ElementRef, ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs/Subject';
import { SysinfoService } from '../../core';
@Component({
    selector: 'themes-preview',
    templateUrl: './themes-preview.html',
    styleUrls: ['./themes-preview.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ThemesPreview {
    id: string;
    qrcode: any;
    laodSuccess: Subject<any> = new Subject();
    url: string;
    @ViewChild('qrcode') _qrcode: ElementRef
    constructor(
        public route: ActivatedRoute,
        @Inject(DOCUMENT) public document: any,
        public ele: ElementRef,
        public sysinfo: SysinfoService
    ) {
        this.route.params.subscribe(res => {
            this.id = res.id;
            this.loadJScript();
        });

        this.laodSuccess.subscribe((qrcode) => {
            this.buildQrcode();
        });
    }

    buildQrcode() {
        const _qrcode = new this.qrcode(this._qrcode.nativeElement, {
            text: this.sysinfo.siteroot+'app/index.php?i='+this.sysinfo.getUniacid()+'&c=entry&do=design&m=imeepos_runner&id=' + this.id,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: this.qrcode.CorrectLevel.H
        });

        this.url = this.sysinfo.siteroot+'app/index.php?i='+this.sysinfo.getUniacid()+'&c=entry&do=design&m=imeepos_runner&id=' + this.id;
    }   

    loadJScript() {
        const script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://meepo.com.cn/meepo/libs/qrcode.min.js';
        script.onload = () => {
            this.qrcode = window['QRCode'];
            this.laodSuccess.next(this.qrcode);
        };
        script.onerror = () => {
            console.log('Swiper插件加载失败');
        };
        this.document.body.appendChild(script);
    }
}
