import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeepoAppService } from './app.service';
import { MeepoComponents } from './src';
import { ElModule } from 'element-angular';

export const ShareNewModules = [
    CommonModule,
    ElModule
];

@NgModule({
    imports: [
        ...ShareNewModules
    ],
    declarations: [
        ...MeepoComponents
    ],
    exports: [
        ...ShareNewModules,
        ...MeepoComponents
    ],
    providers: [
        MeepoAppService
    ],
    entryComponents: []
})
export class MeepoModule { }

