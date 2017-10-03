import { Directive, Component, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'weui-footer',
    template: `
        <ng-content select="footer-links"></ng-content>
        <ng-content select="footer-text"></ng-content>
    `
})
export class WeuiFooter implements OnInit {
    @HostBinding('class.weui-footer') _footer: boolean = true;
    constructor() { }

    ngOnInit() { }
}


@Directive({
    selector: 'weui-footer[fixed]',
})
export class WeuiFooterFixed {
    @HostBinding('class.weui-footer_fixed-bottom') _fixed: boolean = true;
}


@Directive({
    selector: 'footer-links',
})
export class WeuiFooterLinks {
    // weui-footer__links
    @HostBinding('class.weui-footer__links') _links: boolean = true;
}



@Directive({
    selector: 'a[footer-link]',
})
export class WeuiFooterLink {
    @HostBinding('class.weui-footer__link') _link: boolean = true;
}



@Directive({
    selector: 'footer-text',
})
export class WeuiFooterText {
    @HostBinding('class.weui-footer__text') _text: boolean = true;
    @HostBinding('style.display') _display: string = 'block';
}
