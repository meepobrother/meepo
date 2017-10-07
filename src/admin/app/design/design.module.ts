import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VIEWS } from './view';
@NgModule({
    declarations: [
        ...VIEWS
    ],
    imports: [ CommonModule ],
    exports: [
        ...VIEWS
    ],
    providers: [],
    entryComponents: [
        ...VIEWS
    ]
})
export class DesignModule {}