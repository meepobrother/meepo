import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteLoader } from './infinite-loader';
import { InfiniteLoaderConfig } from './infinite-loader.config';
@NgModule({
    declarations: [
        InfiniteLoader
    ],
    imports: [ CommonModule ],
    exports: [
        InfiniteLoader
    ],
    providers: [],
    entryComponents: [ InfiniteLoader ]
})
export class InfiniteLoaderModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: InfiniteLoaderModule, providers: [ InfiniteLoaderConfig ] };
    }
}

