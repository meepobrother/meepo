import { Component, OnInit } from '@angular/core';
import { ShopsGroupService } from './shops-group.service';
import { ShopsGroupAdd } from './shops-group-add';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'shops-group',
    templateUrl: './shops-group.html',
    styleUrls: ['./shops-group.scss']
})
export class ShopsGroup implements OnInit {
    constructor( ) { }
    ngOnInit() { }
}