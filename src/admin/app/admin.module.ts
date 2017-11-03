import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { PagesModule } from './pages';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { ElModule } from 'element-angular';
import { MeepoModule } from './meepo/meepo.module';

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        CommonModule,        
        BrowserModule.withServerTransition({appId: 'runner-admin'}),
        BrowserAnimationsModule,
        CoreModule,
        RouterModule.forRoot([], { useHash: true }),
        PagesModule,
        StoreModule,
        ElModule.forRoot(),
        MeepoModule
    ],
    providers: [],
    bootstrap: [AdminComponent]
})
export class AdminModule { }


