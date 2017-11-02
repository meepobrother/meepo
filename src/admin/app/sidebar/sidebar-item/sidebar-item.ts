import {
    Component, OnInit,
    HostListener, HostBinding, 
    Input, Output, EventEmitter,
    ContentChild
} from '@angular/core';
import { SidebarService } from '../sidebar.service';
import { SidebarContainerService } from '../sidebar-container.service';
import * as uuid from 'uuid';

import { Directive } from '@angular/core';

@Directive({
    selector: '[sidebar-item-right]',
})
export class SidebarItemRight { }

import { SidebarList } from '../sidebar-list/sidebar-list';


@Component({
    selector: 'sidebar-item',
    templateUrl: './sidebar-item.html',
    styleUrls: ['./sidebar-item.scss']
})
export class SidebarItem implements OnInit {
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


