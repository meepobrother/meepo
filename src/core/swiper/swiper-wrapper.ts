import {
    Component,
    HostBinding
} from '@angular/core';

@Component({
    selector: 'swiper-wrapper',
    templateUrl: 'swiper-wrapper.html'
})
export class SwiperWrapper {
    @HostBinding('class.swiper-wrapper') isWrapper: boolean = true;
}
