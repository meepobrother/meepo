import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesDesign } from './themes-design';

import { RouterModule, Routes } from '@angular/router';
import { ThemesMineService } from '../themes/themes-mine.service';
import { ShareModule } from '../../share';
import { SidebarModule } from '../../sidebar/sidebar.module';

import { DesignModule } from '../../design';
const routes: Routes = [
    {
        path: '',
        component: ThemesDesign
    }
];
import { ThemesDesignService } from './themes-design.service';

import { SECTIONS, SECTIONS_SERVICES } from './section';
import { DIALOGS } from './dialog';

@NgModule({
    declarations: [
        ThemesDesign,
        ...SECTIONS,
        ...DIALOGS
    ],
    imports: [
        CommonModule, 
        RouterModule.forChild(routes), 
        ShareModule, 
        SidebarModule,
        DesignModule
    ],
    exports: [
        ThemesDesign
    ],
    providers: [
        ThemesMineService,
        ThemesDesignService,
        ...SECTIONS_SERVICES
    ],
    entryComponents: [
        ...DIALOGS
    ]
})
export class ThemesDesignModule { }