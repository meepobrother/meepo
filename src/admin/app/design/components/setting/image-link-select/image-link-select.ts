import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'image-link-select',
    templateUrl: './image-link-select.html',
    styleUrls: ['./image-link-select.scss']
})
export class ImageLinkSelect implements OnInit {
    @Input() widget: ImageLinkDefault = new ImageLinkDefault();
    
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialogRef<any>
    ) { }

    save(){
        this.dialog.close(this.widget);
    }

    cancel(){
        this.dialog.close();
    }

    ngOnInit() { }

    selectImage(){

    }

    selectLink(){

    }
}

export class ImageLinkDefault{
    image: string;
    link: string;
    title: string;
}