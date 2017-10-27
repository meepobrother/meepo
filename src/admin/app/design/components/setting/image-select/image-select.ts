import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'image-select',
    templateUrl: './image-select.html',
    styleUrls: ['./image-select.scss']
})
export class ImageSelect implements OnInit {
    @Input() widget: ImageDefault = new ImageDefault();
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialogRef<any>
    ) { }

    ngOnInit() { }

    save(){
        this.dialog.close(this.widget);
    }

    cancel(){
        this.dialog.close();
    }

    selectImage() {

    }
}



export class ImageDefault {
    image: string;
}