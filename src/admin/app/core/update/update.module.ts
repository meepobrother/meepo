import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update';
import { UpdateService } from './update.service';
@NgModule({
    declarations: [
        UpdateComponent
    ],
    imports: [ CommonModule ],
    exports: [
        UpdateComponent
    ],
    providers: [
        UpdateService
    ],
})
export class UpdateModule {}