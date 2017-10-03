import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StylesComponent } from './styles/styles';
@NgModule({
    declarations: [
        AdminComponent,
        StylesComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        FlexLayoutModule,
        RouterModule.forRoot([], { useHash: true })
    ],
    providers: [],
    bootstrap: [AdminComponent]
})
export class AdminModule { }


