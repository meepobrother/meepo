import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DownloadPage } from './download.page';
@NgModule({
    declarations: [
        DownloadPage
    ],
    imports: [ CommonModule, RouterModule.forChild([
        {
            path: '',
            component: DownloadPage
        }
    ]) ],
    exports: [],
    providers: [],
})
export class DownloadPageModule {}