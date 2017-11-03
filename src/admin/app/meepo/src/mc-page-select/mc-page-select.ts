import { Component, OnInit, SkipSelf, Optional, EventEmitter, Output, Input } from '@angular/core';
import { MeepoAppService } from '../../app.service';
import { ApiService } from '../../../core/api';

@Component({
    selector: 'mc-page-select',
    templateUrl: './mc-page-select.html',
    styleUrls: ['./mc-page-select.scss']
})
export class McPageSelect implements OnInit {

    meepo: MeepoAppService;
    myapps: any[] = [];
    @Input() page_id: number = 0;

    @Output() onSelect: EventEmitter<any> = new EventEmitter();

    constructor(
        public api: ApiService
    ) {
        this.meepo = MeepoAppService.api;
    }

    ngOnInit() {
        this.getMyApp();
    }

    getMyApp() {
        this.api.mpost('app.getListApp', { page: 1, psize: 50 }).subscribe((res: any) => {
            this.myapps = res.info;
        });
    }

    _onMenuChange(e: any) {
        this.page_id = e;
        this.onSelect.emit(e);
    }
}