import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeuiArticle } from './weui-article';

const components = [
    WeuiArticle
];
@NgModule({
    declarations: [
        ...components
    ],
    imports: [ CommonModule ],
    exports: [
        ...components
    ],
    providers: [],
})
export class WeuiArticleModule {}
