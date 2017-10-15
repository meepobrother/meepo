import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { PagesModule } from './pages';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'runner-admin'}),
        BrowserAnimationsModule,
        CoreModule,
        RouterModule.forRoot([], { useHash: true }),
        PagesModule,
        StoreModule
    ],
    providers: [],
    bootstrap: [AdminComponent]
})
export class AdminModule { }


