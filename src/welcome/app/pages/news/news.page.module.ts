import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsPage } from './news.page';
@NgModule({
    declarations: [
        NewsPage
    ],
    imports: [ CommonModule, RouterModule.forChild([
        {
            path: '',
            component: NewsPage
        }
    ]) ],
    exports: [],
    providers: [],
})
export class NewsPageModule {}