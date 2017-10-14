import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectPageDialog } from './select-page-dialog';
@NgModule({
    declarations: [
        SelectPageDialog
    ],
    imports: [ CommonModule ],
    exports: [
        SelectPageDialog
    ],
    providers: [],
})
export class SelectPageDialogModule {}