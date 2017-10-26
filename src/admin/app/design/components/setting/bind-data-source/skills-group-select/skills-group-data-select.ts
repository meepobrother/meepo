import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from '../../../../../core';
@Component({
    selector: 'skills-group-data-select',
    templateUrl: './skills-group-data-select.html',
    styleUrls: ['./skills-group-data-select.scss']
})
export class SkillsGroupDataSelect implements OnInit {
    list: any[] = [];
    constructor(
        public api: ApiService,
        public dialog: MatDialog
    ) { }

    ngOnInit() { 
        this.getList();
    }

    getList(){
        this.api.mpost('skills.getListTasksTags',{}).subscribe((res: any)=>{
            this.list = res.info;
        });
    }
}