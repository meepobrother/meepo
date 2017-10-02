import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { WelcomePage } from './welcome.page';
const routes: Routes = [
    { path: '', component: WelcomePage }
];

@NgModule({
    declarations: [
        WelcomePage
    ],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WelcomeModule {}


