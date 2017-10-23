import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { ApiService } from '../api';
@Component({
    selector: 'member-select',
    templateUrl: './member-select.html',
    styleUrls: ['./member-select.scss']
})
export class MemberSelect implements OnInit {
    @Input() title: string;
    members: any[] = [];

    selected: any;

    showModel: boolean = false;
    @Output() onChange: EventEmitter<any> = new EventEmitter();
    constructor(
        public api: ApiService
    ) {
        this.selected = new SelectionModel(true, [], true);

        this.selected.onChange.subscribe(res => {
            console.log(this.selected.selected);
            this.onChange.emit(this.selected.selected);
        });
    }

    getList(){
        this.api.mpost('member.getSystem',{}).subscribe((res: any)=>{
            this.members = res.info;
        });
    }

    ngOnInit() {
        this.members = [];
        this.getList();
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