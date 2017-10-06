import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexPage } from './index.page';
import { RouterModule } from '@angular/router';
import { SwiperModule, LayoutModule, ApiModule } from '@meepo/core';
import { IndexService } from './index.service';

@NgModule({
    declarations: [
        IndexPage
    ],
    imports: [
        CommonModule,
        SwiperModule,
        LayoutModule,
        ApiModule
    ],
    providers: [
        IndexService
    ],
    exports: [
        IndexPage
    ]
})
export class IndexPageSettingModule { }