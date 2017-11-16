import { Component, OnInit } from '@angular/core';
import { MemberGroupServiceService } from './member-group.service';
import { AddGroup } from './add-group';
import { MatDialog } from '@angular/material';
import { Group, AddGroupOpt } from './add-grop-opt';

@Component({
    selector: 'member-group',
    templateUrl: './member-group.html',
    styleUrls: ['./member-group.scss']
})
export class MemberGroup implements OnInit {
    constructor(
        public api: MemberGroupServiceService,
        public dialog: MatDialog
    ) { }

    ngOnInit() { }
}