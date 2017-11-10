export * from './draggable';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DraggableDirective } from './draggable';
import { DropableDirective } from './dropable';

import { DragDropService } from './drag-drop.service';

@NgModule({
    declarations: [
        DraggableDirective,
        DropableDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DraggableDirective,
        DropableDirective
    ],
    providers: [
        DragDropService
    ]
})
export class SortableModule { }
