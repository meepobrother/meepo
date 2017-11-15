import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: '[nestable-item]',
    templateUrl: './nestable-item.html',
    styleUrls: ['./nestable-item.scss']
})
export class NestableItem implements OnInit {
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