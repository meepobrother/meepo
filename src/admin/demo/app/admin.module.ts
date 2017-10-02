import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent }  from './admin.component';

@NgModule({
    declarations: [ AdminComponent ],
    imports: [ BrowserModule ],
    providers: [],
    bootstrap: [ AdminComponent ]
})
export class AdminModule {}
