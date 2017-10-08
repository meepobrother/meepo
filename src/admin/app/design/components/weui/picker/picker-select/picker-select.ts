import { Component, OnInit } from '@angular/core';
import { Picker } from '../picker';
import { MatDialogRef } from '@angular/material';
@Component({
    selector: 'picker-select',
    templateUrl: './picker-select.html',
    styleUrls: ['./picker-select.scss']
})
export class PickerSelect implements OnInit {
    widgets: Picker[] = [];
    constructor(
        public dialog: MatDialogRef<any>
    ) { 
        const picker1 = new Picker();
        picker1.colomn = 1;
        console.log(picker1);
        this.widgets.push(picker1);
    }

    ngOnInit() { }

    select(item: Picker){
        this.dialog.close(item);
    }
}
