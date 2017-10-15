import { Component, OnInit, Output, EventEmitter } from '@angular/core';
<<<<<<< HEAD
import { ComponentsService } from '../../../../design';
=======
import { ApiService } from '../../../../core';
>>>>>>> master
@Component({
    selector: 'widget-section',
    templateUrl: './widget-section.html',
    styleUrls: ['./widget-section.scss']
})
export class WidgetSection implements OnInit {
<<<<<<< HEAD
    @Output() onAdd: EventEmitter<any> = new EventEmitter();
    constructor(
        public components$: ComponentsService        
    ) { }

    ngOnInit() { }

    addWidget(name: string){
        this.onAdd.emit(this.components$.addComponent(name));
=======
    widgets: any[] = [];
    @Output() onSelect: EventEmitter<any> = new EventEmitter();
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() {
        this.api.mpost('app.getListAppWidgets', { page: 1, psize: 30 }).subscribe((res: any) => {
            this.widgets = res.info;
        });
    }

    selectWidget(item: any){
        console.log(item);
        this.onSelect.emit(item);
>>>>>>> master
    }
}