import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesPreview } from './themes-preview';
import { ShareModule } from '../../share';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    {
        path: '',
        component: ThemesPreview
    }
];
@NgModule({
    declarations: [
        ThemesPreview
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ShareModule
    ],
    exports: [
        ThemesPreview
    ],
    providers: [],
    entryComponents: []
})
export class ThemesPreviewModule { }