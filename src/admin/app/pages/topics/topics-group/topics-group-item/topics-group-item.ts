import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'topics-group-item',
    templateUrl: './topics-group-item.html',
    styleUrls: ['./topics-group-item.scss']
})
export class TopicsGroupItem implements OnInit {
    @Input() items: any[] = [];
    constructor() { }

    ngOnInit() { }

    delete(item: any, index: number){}
    edit(item: any, index: number){}
    
}