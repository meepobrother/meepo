import { Component, OnInit, Input } from '@angular/core';
import { MeepoList } from '../../../../classes';
import { ApiService } from '../../../../../core';
@Component({
    selector: 'meepo-list-view',
    templateUrl: './meepo-list-view.html',
    styleUrls: ['./meepo-list-view.scss']
})
export class MeepoListView implements OnInit {
    @Input() widget: MeepoList = new MeepoList();

    constructor(
        public api: ApiService
    ) { }

    ngOnInit() {
        this.getList();
    }

    getList() {
        this.api.mpost('orders.getListOrder', { page: 1, psize: 30 }).subscribe((res: any) => {
            this.widget.children = res.info;
        });
    }
}
