import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CatalogService } from '../catalog.service';
@Component({
    selector: 'catalog-section',
    templateUrl: './catalog-section.html',
    styleUrls: ['./catalog-section.scss']
})
export class CatalogSection implements OnInit {
    @Input() items: any[] = [];
    constructor(
        public catalogService: CatalogService
    ) { }

    ngOnInit() { }

    clearEvent(evt: any){
        evt.stopPropagation();
    }
}

