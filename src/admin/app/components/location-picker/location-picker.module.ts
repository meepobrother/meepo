import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationPicker } from './location-picker';
@NgModule({
    declarations: [
        LocationPicker
    ],
    imports: [ CommonModule ],
    exports: [
        LocationPicker
    ],
    providers: [],
})
export class LocationPickerModule {}