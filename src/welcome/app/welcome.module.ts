import { NgModule } from '@angular/core';
import { WelcomeComponent } from './welcome.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { PagesModule} from './pages/pages.module';
@NgModule({
    declarations: [
        WelcomeComponent
    ],
    imports: [ 
        BrowserModule.withServerTransition({appId: 'runner-admin'}),
        BrowserAnimationsModule,
        RouterModule.forRoot([], { useHash: true }),
        PagesModule   
    ],
    exports: [
        WelcomeComponent
    ],
    providers: [],
    bootstrap: [
        WelcomeComponent
    ]
})
export class WelcomeModule {}