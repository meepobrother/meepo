import { NgModule } from '@angular/core';
import { DemosComponent } from './demos.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        DemosComponent
    ],
    imports: [ 
        BrowserModule.withServerTransition({appId: 'runner-admin'}),
        BrowserAnimationsModule,
        RouterModule.forRoot([], { useHash: true }),        
    ],
    exports: [
        DemosComponent
    ],
    providers: [],
    bootstrap: [
        DemosComponent
    ]
})
export class DemosModule {}