import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        RouterModule.forRoot([], { useHash: true })
    ],
    providers: [],
    bootstrap: [AdminComponent]
})
export class AdminModule { }


