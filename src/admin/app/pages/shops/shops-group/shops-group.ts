import { Component, OnInit } from '@angular/core';
import { ShopsGroupService } from './shops-group.service';
@Component({
    selector: 'shops-group',
    templateUrl: './shops-group.html',
    styleUrls: ['./shops-group.scss']
})
export class ShopsGroup implements OnInit {
    constructor(
        public api: ShopsGroupService
    ) { }

    ngOnInit() { }
}