import { NgModule, Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule, Title, DOCUMENT } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestCoreBase } from './tests/test-base';

@NgModule({
    declarations: [
        AppComponent,
        TestCoreBase
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([], { useHash: true })
    ],
    exports: [],
    providers: [
        Title
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }