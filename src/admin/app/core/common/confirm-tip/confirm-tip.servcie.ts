
import { MatDialog } from '@angular/material';
import { ConfirmTipComponent } from './confirm-tip';
import { Observable } from 'rxjs/Observable';

export class ConfirmTipService {

    constructor(
        public dialog: MatDialog
    ) { }

    open(content: string): Observable<any> {
        const dialogRef = this.dialog.open(ConfirmTipComponent, { data: { content: content } });
        return dialogRef.afterClosed();
    }
}
