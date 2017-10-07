import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesDesign } from './themes-design';
import { RouterModule, Routes } from '@angular/router';
import { ThemesMineService } from '../themes/themes-mine.service';
import { ShareModule } from '../../share';
import { SidebarModule } from '../../sidebar/sidebar.module';
const routes: Routes = [
    {
        path: '',
        component: ThemesDesign
    }
];
import { ThemesDesignService } from './themes-design.service';
@NgModule({
    declarations: [
        ThemesDesign
    ],
    imports: [CommonModule, RouterModule.forChild(routes), ShareModule, SidebarModule],
    exports: [
        ThemesDesign
    ],
    providers: [
        ThemesMineService,
        ThemesDesignService
    ],
})
export class ThemesDesignModule { }