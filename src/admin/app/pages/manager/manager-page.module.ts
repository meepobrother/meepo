import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerPage } from './manager-page';
import { RouterModule, Routes } from '@angular/router';
import { AddWidget } from './add-widget';
import { AddWidgetGroup } from './add-widget-group';


import { AddForm } from './add-form';
import { AddTable } from './add-table';


import { WidgetList } from './widget-list';
import { WidgetGroupList } from './widget-group-list/widget-group-list';

import { FormsList } from './forms-list';

import { ThemesMine} from './themes-mine';
import { ThemesAdd } from './themes-add';
import { VideoListComponent } from './video-list/video-list';



import { ShareModule } from '../../share';
import { MeepoModule } from '../../meepo/meepo.module';
const routes: Routes = [
    {
        path: '',
        component: ManagerPage
    }
];
@NgModule({
    declarations: [
        ManagerPage,
        AddWidget,
        WidgetList,
        ThemesMine,
        ThemesAdd,
        FormsList,
        AddForm,
        AddTable,
        AddWidgetGroup,
        WidgetGroupList,
        VideoListComponent
    ],
    imports: [ CommonModule, RouterModule.forChild(routes), ShareModule, MeepoModule ],
    exports: [
        ManagerPage,
        AddWidget,
        WidgetList,
        AddWidgetGroup,
        VideoListComponent
    ],
    providers: [],
    entryComponents: [
        AddWidget,
        ThemesAdd,
        AddForm,
        AddWidgetGroup
    ]
})
export class ManagerPageModule {}
