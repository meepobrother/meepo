import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemesListFree } from './themes-list-free';
import { ThemesListFreeService } from './themes-list-free.service';

@NgModule({
    declarations: [
        ThemesListFree
    ],
    imports: [ CommonModule ],
    exports: [
        ThemesListFree
    ],
    providers: [
        ThemesListFreeService
    ],
})
export class ThemesListFreeModule {}