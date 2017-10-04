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

@NgModule({
    declarations: [
        LoginPage
    ],
    imports: [ CommonModule, RouterModule.forChild(routes) ],
    exports: [],
    providers: [],
})
export class LoginPageModule {}