import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    {
        path: 'news',
        loadChildren: 'app/pages/news/news.page.module#NewsPageModule'
    },
    {
        path: 'logs',
        loadChildren: 'app/pages/logs/logs.page.module#LogsPageModule'
    },
    {
        path: 'download',
        loadChildren: 'app/pages/download/download.page.module#DownloadPageModule'
    },
    {
        path: 'demos',
        loadChildren: 'app/pages/demos/demos.page.module#DemosPageModule'
    },
    {
        path: 'docs',
        loadChildren: 'app/pages/docs/docs.page.module#DocsPageModule'
    },
    {
        path: 'apps',
        loadChildren: 'app/pages/apps/apps.page.module#AppsPageModule'
    },
];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PagesModule { }