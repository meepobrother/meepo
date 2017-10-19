import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogsPage } from './logs.page';
@NgModule({
    declarations: [
        LogsPage
    ],
    imports: [ CommonModule, RouterModule.forChild([
        {
            path: '',
            component: LogsPage
        }
    ]) ],
    exports: [],
    providers: [],
})
export class LogsPageModule {}