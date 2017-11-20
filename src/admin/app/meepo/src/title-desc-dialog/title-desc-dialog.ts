import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'title-desc-dialog',
    templateUrl: './title-desc-dialog.html',
    styleUrls: ['./title-desc-dialog.scss']
})
export class TitleDescDialog implements OnInit {
    form: any = {
        title: '',
        desc: ''
    };
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialogRef<any>
    ) { 
        this.dialog.afterOpen().subscribe(()=>{
            if(this.data){
                let { title, desc } = this.data || {title: '', desc: ''};
                this.form['title'] = title;
                this.form['desc'] = desc;
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
    
}