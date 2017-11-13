import {
    Component, OnInit, Input,
    Output, EventEmitter, ElementRef
} from '@angular/core';
declare const jQuery;

@Component({
    selector: 'tags-select',
    templateUrl: './tags-select.html',
    styleUrls: ['./tags-select.scss']
})
export class TagsSelect implements OnInit {
    @Input() items: any[] = [];
    @Input() isMulti: boolean = true;
    @Output() onSelect: EventEmitter<any> = new EventEmitter();
    constructor() { }
    ngOnInit() { }

    selectStatus(item: any){
        if(this.isMulti){}else{
            this.items.map((res: any)=>{
                res.active = false;
            });
        }
        item.active = !item.active;
        this.onSelect.emit(this.items);
    }
}
