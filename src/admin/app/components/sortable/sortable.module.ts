import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortableDirective } from './sortable';
@NgModule({
    declarations: [
        SortableDirective
    ],
    imports: [ CommonModule ],
    exports: [
        SortableDirective
    ],
    providers: [],
})
export class SortableModule {}