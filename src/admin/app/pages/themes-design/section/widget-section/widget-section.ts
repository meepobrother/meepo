import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ComponentsService } from '../../../../design';
@Component({
    selector: 'widget-section',
    templateUrl: './widget-section.html',
    styleUrls: ['./widget-section.scss']
})
export class WidgetSection implements OnInit {
    @Output() onAdd: EventEmitter<any> = new EventEmitter();
    constructor(
        public components$: ComponentsService        
    ) { }

    ngOnInit() { }

    addWidget(name: string){
        this.onAdd.emit(this.components$.addComponent(name));
    }
}