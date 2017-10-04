import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPage } from './login-page';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    {
        path: '',
        component: LoginPage
    }
];

import { ShareModule } from '../../share';
const modules = [
    ShareModule
];

@NgModule({
    declarations: [
        LoginPage
    ],
    imports: [ 
        CommonModule, 
        RouterModule.forChild(routes),
        ...modules
    ],
    exports: [],
    providers: [],
})
export class LoginPageModule {}