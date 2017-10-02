import { NgModule, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule, Title, DOCUMENT } from '@angular/platform-browser';
import { RunnerComponent } from './runner.component';

@NgModule({
    declarations: [
        RunnerComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([], { useHash: true })
    ],
    exports: [],
    bootstrap: [
        RunnerComponent
    ]
})
export class RunnerModule { }
