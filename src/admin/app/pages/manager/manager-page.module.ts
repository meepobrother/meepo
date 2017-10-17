import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerPage } from './manager-page';
import { RouterModule, Routes } from '@angular/router';
import { AddWidget } from './add-widget';
import { AddForm } from './add-form';
import { AddTable } from './add-table';


import { WidgetList } from './widget-list';
import { FormsList } from './forms-list';

import { ThemesMine} from './themes-mine';
import { ThemesAdd } from './themes-add';


import { ShareModule } from '../../share';
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
        AddTable
    ],
    imports: [ CommonModule, RouterModule.forChild(routes), ShareModule ],
    exports: [
        ManagerPage,
        AddWidget,
        WidgetList
    ],
    providers: [],
    entryComponents: [
        AddWidget,
        ThemesAdd
    ]
})
export class ManagerPageModule {}
