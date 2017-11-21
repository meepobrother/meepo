import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { SelectPageDialog } from '../page-select/page-select';
@Component({
    selector: 'title-link-select',
    templateUrl: './title-link-select.html',
    styleUrls: ['./title-link-select.scss']
})
export class TitleLinkSelect implements OnInit {
    form: any = {
        title: '',
        desc: ''
    };
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialogRef<any>,
        public _dialog: MatDialog
    ) { 
        this.dialog.afterOpen().subscribe(()=>{
            if(this.data){
                let { title, link } = this.data || {title: '', link: ''};
                this.form['title'] = title;
                this.form['link'] = link;
            }
        });
    }

    ngOnInit() { }

    save(){
        this.dialog.close(this.form);
    }

    cancel(){
        this.dialog.close();
    }

    selectLink(){
        let dialogRef = this._dialog.open(SelectPageDialog);
        dialogRef.afterClosed().subscribe(link => {
            this.form.link = link;
        });
    }
    
}