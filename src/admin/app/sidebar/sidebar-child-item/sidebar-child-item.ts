import {
    Component, OnInit, HostBinding,
    HostListener, Input, Output, EventEmitter, ContentChild
} from '@angular/core';
import { SidebarService } from '../sidebar.service';
import uuid from 'uuid';

import { SidebarList } from '../sidebar-list/sidebar-list';
@Component({
    selector: 'sidebar-child-item',
    templateUrl: './sidebar-child-item.html',
    styleUrls: ['./sidebar-child-item.scss']
})
export class SidebarChildItem implements OnInit {
    @HostBinding('class.active') _active: boolean = false;
    @Input() id: string;
    @ContentChild(SidebarList) _list: SidebarList;
    @HostListener('click', ['$event'])
    click(evt: any) {
        this.service$.childSidebars.forEach(sidebar => {
            if (sidebar !== this) {
                sidebar.setUnActive();
            }
        });
        this._active = !this._active;
        this.onItem.emit(this._active);
        evt.stopPropagation();
    }
    @Output() onItem: EventEmitter<boolean> = new EventEmitter();
    constructor(
        public service$: SidebarService
    ) { }
    // 添加子菜单项目
    ngOnInit() {
        this.id = this.id || uuid();
        this.service$.childSidebars.set(this.id, this);
    }
    // 激活项目
    setActive() {
        this._active = true;
    }
    // 取消项目
    setUnActive() {
        this._active = false;
    }
}
