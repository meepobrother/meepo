
import { MatDialog } from '@angular/material';
import { AlertTipComponent } from './alert-tip';
import { Observable } from 'rxjs/Observable';

export class AlertTip {

    constructor(
        public dialog: MatDialog
    ) { }

    open(): Observable<any> {
        const time: number = 1500;
        const dialogRef = this.dialog.open(AlertTipComponent, { data: time });
       return  dialogRef.afterClosed();
    }
}
