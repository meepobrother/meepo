import {
    Component, OnInit, HostBinding,
    HostListener, Input, Output, EventEmitter, ContentChild
} from '@angular/core';
import { SidebarService } from '../sidebar.service';
import uuid from 'uuid';
import { SidebarItemRight } from '../sidebar-item/sidebar-item';
import { SidebarList } from '../sidebar-list/sidebar-list';
import { SidebarContainerService } from '../sidebar-container.service';
@Component({
    selector: 'sidebar-child-item',
    templateUrl: './sidebar-child-item.html',
    styleUrls: ['./sidebar-child-item.scss']
})
export class SidebarChildItem implements OnInit {
    @HostBinding('class.active') _active: boolean = false;
    @Input() id: string;
    @Output() onItem: EventEmitter<boolean> = new EventEmitter();

    @ContentChild(SidebarList) _list: SidebarList;
    @ContentChild(SidebarItemRight) _right: SidebarItemRight;

    _open: boolean = false;

    @HostListener('click', ['$event'])
    click(evt: any) {
        this.service$.sidebars.forEach(sidebar => {
            if (sidebar !== this) {
                sidebar.setUnActive();
            }
        });
        this.onItem.emit(this._active);
        this._active = !this._active;
    }

    constructor(
        public service$: SidebarService,
        public container$: SidebarContainerService
    ) { }
    // 添加组项目
    ngOnInit() {
        this.id = this.id || uuid();
        this.service$.sidebars.set(this.id, this);

        this.container$.onOpen.subscribe(res=>{
            console.log('sidebar item is ', res);
            this._open = res;
        });
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
