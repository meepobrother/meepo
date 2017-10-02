import { EventEmitter } from '@angular/core';

export abstract class SwiperPageBase { 
    laodSuccess: EventEmitter<any> = new EventEmitter();
}

