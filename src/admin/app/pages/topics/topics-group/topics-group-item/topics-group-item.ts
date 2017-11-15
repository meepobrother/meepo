import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: '[topics-group-item]',
    templateUrl: './topics-group-item.html',
    styleUrls: ['./topics-group-item.scss']
})
export class TopicsGroupItem implements OnInit {
    @Input() items: any[] = [];
    @Output() onEdit: EventEmitter<any> = new EventEmitter();
    @Output() onDelete: EventEmitter<any> = new EventEmitter();
    
    constructor() { }
    ngOnInit() { }
    delete(data: any){
        this.onDelete.emit(data);
    }
    edit(data: any){
        this.onEdit.emit(data);        
    }
}