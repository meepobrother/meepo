import { NgModule } from '@angular/core';
import { ElModule } from 'element-angular';
import { CommonModule } from '@angular/common';
import { SortableModule } from '../components/sortable';
import './rxjs-operators';

export const ShareNewModules = [
    CommonModule,
    ElModule,
    SortableModule
];

@NgModule({
    imports: [
        ...ShareNewModules
    ],
    declarations: [],
    exports: [
        ...ShareNewModules
    ],
    providers: [],
    entryComponents: []
})
export class ShareNewModule { }

