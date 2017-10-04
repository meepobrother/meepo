import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: 'weui-loading',
})
export class WeuiLoading { 
    @HostBinding('class.weui-loading') _loading: boolean = true;
}

