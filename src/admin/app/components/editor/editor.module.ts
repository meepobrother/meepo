import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor';
@NgModule({
    declarations: [
        EditorComponent
    ],
    imports: [ CommonModule ],
    exports: [
        EditorComponent
    ],
    providers: [],
})
export class EditorModule {}