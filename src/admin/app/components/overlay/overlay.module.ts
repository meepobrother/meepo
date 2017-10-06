import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent, OverlayPanelComponent } from './overlay';
@NgModule({
    declarations: [
        OverlayComponent,
        OverlayPanelComponent
    ],
    imports: [CommonModule],
    exports: [
        OverlayComponent,
        OverlayPanelComponent
    ],
    providers: [],
})
export class OverlayModule { }
