import { Directive, HostBinding, Component } from '@angular/core';

@Component({
    selector: 'weui-grid',
    template: `
        <ng-content select="grid-icon"></ng-content>
        <ng-content></ng-content>
    `
})
export class WeuiGrid {
    @HostBinding('class.weui-grid') _grid: boolean = true;
}


@Directive({
    selector: 'grid-icon',
})
export class WeuiGridIcon {
    @HostBinding('class.weui-grid__icon') _icon: boolean = true;
    @HostBinding('style.display') _display: string = 'block';
}


@Directive({
    selector: 'grid-label',
})
export class WeuiGridLabel {
    @HostBinding('class.weui-grid__label') _label: boolean = true;
}

