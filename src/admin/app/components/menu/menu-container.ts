import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'menu-container',
    templateUrl: './menu-container.html',
    styleUrls: ['./menu-container.scss']
})
export class MenuContainer implements OnInit {
    @Output() onEdit: EventEmitter<any> = new EventEmitter();
    @Output() onDelete: EventEmitter<any> = new EventEmitter();
    
    constructor() { }

    ngOnInit() { }

    edit() { 
        this.onEdit.emit();
    }

    delete() { 
        this.onDelete.emit();
    }
}