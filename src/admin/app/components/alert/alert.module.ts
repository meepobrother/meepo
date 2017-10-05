import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alert, AlertDanger, AlertInfo, AlertSuccess, AlertWarning } from './alert';
@NgModule({
    declarations: [
        Alert, AlertDanger, AlertInfo, AlertSuccess, AlertWarning
    ],
    imports: [ CommonModule ],
    exports: [
        Alert, AlertDanger, AlertInfo, AlertSuccess, AlertWarning
    ],
    providers: [],
})
export class AlertModule {}