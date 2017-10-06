import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material';
@NgModule({
    imports: [
        MatSidenavModule
    ],
    exports: [
        MatSidenavModule
    ],
})
export class ShareModule {}