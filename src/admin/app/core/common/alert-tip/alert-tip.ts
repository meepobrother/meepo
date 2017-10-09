import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

/**
 * alert tip 一定时间后自动关闭，默认1500
 */

@Component({
    selector: "alert-tip",
    templateUrl: "./alert-tip.html",
    styleUrls: [
        "./alert-tip.scss"
    ]
})
export class AlertTipComponent implements OnInit {
    constructor(
        public dialog: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: { time: number }
    ) { }

    ngOnInit() {
        this.dialog.afterOpen().subscribe(() => {
            let { time } = this.data;
            time = time || 1500;
            setTimeout(() => {
                this.cancel();
            }, time)
        });
    }

    cancel() {
        this.dialog.close();
    }
}

