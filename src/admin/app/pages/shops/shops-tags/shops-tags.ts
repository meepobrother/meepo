import { Component, OnInit } from '@angular/core';
import { ShopsTagsService } from './shops-tags.service';

@Component({
    selector: 'shops-tags',
    templateUrl: './shops-tags.html',
    styleUrls: ['./shops-tags.scss']
})
export class ShopsTags implements OnInit {
    constructor(
        public api: ShopsTagsService
    ) { }

    ngOnInit() { }
}