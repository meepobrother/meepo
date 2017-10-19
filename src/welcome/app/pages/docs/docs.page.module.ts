import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DocsPage } from './docs.page';
@NgModule({
    declarations: [
        DocsPage
    ],
    imports: [ CommonModule, RouterModule.forChild([
        {
            path: '',
            component: DocsPage
        }
    ]) ],
    exports: [],
    providers: [],
})
export class DocsPageModule {}