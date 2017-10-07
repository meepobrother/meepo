import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesDesign } from './themes-design';
import { RouterModule , Routes } from '@angular/router';
import { ThemesMineService } from '../themes/themes-mine.service';

const routes: Routes = [
    {
        path: '',
        component: ThemesDesign
    }
];
@NgModule({
    declarations: [
        ThemesDesign
    ],
    imports: [ CommonModule,RouterModule.forChild(routes) ],
    exports: [
        ThemesDesign
    ],
    providers: [
        ThemesMineService
    ],
})
export class ThemesDesignModule {}