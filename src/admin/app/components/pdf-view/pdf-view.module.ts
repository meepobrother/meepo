import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfView } from './pdf-view';
@NgModule({
    declarations: [
        PdfView
    ],
    imports: [ CommonModule ],
    exports: [
        PdfView
    ],
    providers: [],
})
export class PdfViewModule {}
