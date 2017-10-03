import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [AdminComponent],
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


