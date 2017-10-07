import { Component, OnInit } from '@angular/core';
import { ThemesMineService } from '../themes-mine.service';
import { MatDialog } from '@angular/material';
import { ThemesAdd } from '../themes-add';
import { Router } from '@angular/router';
@Component({
    selector: 'themes-mine',
    templateUrl: './themes-mine.html',
    styleUrls: ['./themes-mine.scss']
})
export class ThemesMine implements OnInit {
    constructor(
        public api: ThemesMineService,
        public dialog: MatDialog,
        public router: Router
    ) { }

    ngOnInit() { }

    edit(item: any) { 
        const dialogRef = this.dialog.open(ThemesAdd,{data: item});
    }

    goDesign(item: any){
        console.log(item);
        this.router.navigate(['/themes/design',item.code])
    }
}
