import { Component, OnInit } from '@angular/core';
import { MeepoAppService } from '../../app.service';
@Component({
    selector: 'me-loading',
    templateUrl: './me-loading.html',
    styleUrls: ['./me-loading.scss']
})
export class MeLoading implements OnInit {
    loading: boolean = false;
    text: string = '拼命加载中';
    full: boolean = false;
    lock: boolean = true;

    constructor(
        public meepo: MeepoAppService
    ) {
        this.meepo.showLoadingStream.subscribe((data: any) => {
            let { loading, text, full, lock } = data;
            this.loading = loading;
            this.text = text;
            this.full = full;
            this.lock = lock;
        });
    }

    ngOnInit() { }

    hideLoading(){
        this.meepo.showLoadingStream.next({
            loading: false
        });
    }
}