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
        this.widgets.push(new Navbar());
    }

    ngOnInit() { }

    select(item: Navbar){
        this.dialog.close(item);
    }
}