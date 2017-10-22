import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
@Component({
    selector: 'member-select',
    templateUrl: './member-select.html',
    styleUrls: ['./member-select.scss']
})
export class MemberSelect implements OnInit {
    members: any[] = [];

    selected: any;

    showModel: boolean = false;
    @Output() onChange: EventEmitter<any> = new EventEmitter();
    constructor() {
        this.selected = new SelectionModel(true, [], true);

        this.selected.onChange.subscribe(res => {
            this.onChange.emit(this.selected.selected);
        });
    }

    ngOnInit() {
        this.members = [
            {}, {}, {}, {},
            {}, {}, {}, {},
            {}, {}, {}, {},
        ]
    }

    _select(item: any) {
        this.selected.toggle(item);
    }

    _has(item) {
        this.selected.hasValue(item);
    }

    addMember(){
        this.showModel = true;
    }

    save(){
        this.showModel = false;
    }
}