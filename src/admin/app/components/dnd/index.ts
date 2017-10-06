import { NgModule, ModuleWithProviders } from "@angular/core";

import {DragDropConfig} from './dnd.config';
import {DragDropService, DragDropSortableService, dragDropServiceFactory, dragDropSortableServiceFactory} from './dnd.service';
import {DraggableComponent, DraggableHandleComponent} from './draggable.component';
import {DroppableComponent} from './droppable.component';
import {SortableContainer, SortableComponent, SortableHandleComponent} from './sortable.component';

export * from './abstract.component';
export * from './dnd.config';
export * from './dnd.service';
export * from './draggable.component';
export * from './droppable.component';
export * from './sortable.component';

export let providers = [
    DragDropConfig,
    { provide: DragDropService, useFactory: dragDropServiceFactory },
    { provide: DragDropSortableService, useFactory: dragDropSortableServiceFactory, deps: [DragDropConfig] }
];

@NgModule({
  declarations: [DraggableComponent, DraggableHandleComponent, DroppableComponent, SortableContainer, SortableComponent, SortableHandleComponent],
  exports : [DraggableComponent, DraggableHandleComponent, DroppableComponent, SortableContainer, SortableComponent, SortableHandleComponent],
})
export class DndModule {
  static forRoot(): ModuleWithProviders {
        return {
            ngModule: DndModule,
            providers: providers
        };
    }
}
