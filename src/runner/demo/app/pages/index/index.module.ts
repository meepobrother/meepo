import { NgModule } from '@angular/core';
import { IndexPage } from './index.page';
import { RouterModule } from '@angular/router';
import { SwiperModule } from '@meepo/core';

@NgModule({
    imports: [
        SwiperModule,
        RouterModule.forChild([{
            path: '',
            component: IndexPage
        }])
    ]
})
export class IndexPageModule { }