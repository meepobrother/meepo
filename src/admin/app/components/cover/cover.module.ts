import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverComponent, CoverContent } from './cover';
@NgModule({
    declarations: [
        CoverComponent,
        CoverContent
    ],
    imports: [ CommonModule ],
    exports: [
        CoverComponent,
        CoverContent
    ],
    providers: [],
})
export class CoverModule {}