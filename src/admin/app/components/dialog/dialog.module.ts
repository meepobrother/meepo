import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeepoDialog, MeepoDialogContent } from './dialog';
@NgModule({
    declarations: [
        MeepoDialog,
        MeepoDialogContent
    ],
    imports: [ CommonModule ],
    exports: [
        MeepoDialog,
        MeepoDialogContent
    ],
    providers: [],
})
export class MeepoDialogModule {}