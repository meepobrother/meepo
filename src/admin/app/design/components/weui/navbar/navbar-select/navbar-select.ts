import { Component, OnInit } from '@angular/core';
import { Navbar } from '../navbar';
import { MatDialogRef } from '@angular/material';
@Component({
    selector: 'navbar-select',
    templateUrl: './navbar-select.html',
    styleUrls: ['./navbar-select.scss']
})
export class NavbarSelect implements OnInit {
    widgets: Navbar[] = [];
    constructor(
        public dialog: MatDialogRef<any>
    ) { 
        const newNavbar = new Navbar();
        newNavbar.content = [
            {
                title: '待接单',
                active: false
            },
            {
                title: '待收货',
                active: false
            },
            {
                title: '待确认',
                active: false
            },
            {
                title: '已完成',
                active: false
            }
        ];
        this.widgets.push(newNavbar);
    }

    ngOnInit() { }

    select(item: Navbar){
        this.dialog.close(item);
    }
}