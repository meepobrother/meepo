import { NgModule, Injector } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule, Title, DOCUMENT } from '@angular/platform-browser';
import { TestPage } from './test-base';


const routes: Routes = [
    {
        path: '',
        component: TestPage
    }
];
@NgModule({
    declarations: [
        TestPage
    ],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class TestModule { }