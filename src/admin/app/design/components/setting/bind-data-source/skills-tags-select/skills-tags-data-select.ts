import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from '../../../../../core';
@Component({
    selector: 'skills-tags-data-select',
    templateUrl: './skills-tags-data-select.html',
    styleUrls: ['./skills-tags-data-select.scss']
})
export class SkillsTagsDataSelect implements OnInit {
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