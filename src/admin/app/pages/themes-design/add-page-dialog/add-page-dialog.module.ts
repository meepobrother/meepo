import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPageDialog } from './add-page-dialog';
import { ShareModule } from '../../../share';
@NgModule({
    declarations: [
        AddPageDialog
    ],
    imports: [CommonModule, ShareModule],
    exports: [
        AddPageDialog
    ],
    providers: [],
    entryComponents: [
        AddPageDialog
    ]
})
export class AddPageDialogModule { }