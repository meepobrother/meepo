import { Component, HostBinding } from '@angular/core';

@Component({
    selector: '[weui-btn][loading]',
    template: `
        <div class="weui-loading"></div>
        <ng-content></ng-content>
    `
})
export class WeuiButtonLoading {
    @HostBinding('class.weui-btn_loading') _loading: boolean = true;
}
