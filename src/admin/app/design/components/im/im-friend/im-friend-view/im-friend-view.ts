import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../core/api';

@Component({
    selector: 'im-friend-view',
    templateUrl: './im-friend-view.html',
    styleUrls: ['./im-friend-view.scss']
})
export class ImFriendView implements OnInit {

    list: any[] = [];

    constructor(
        public api: ApiService
    ) { }

    ngOnInit() {
        this.api.mpost('runner.getall', {}).subscribe((res: any) => {
            this.list = res.info;
        });
    }
}
