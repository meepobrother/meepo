import { Component, OnInit, HostBinding, Directive } from '@angular/core';

@Component({
    selector: 'weui-box',
    template: `
        <ng-content></ng-content>
    `
})
export class WeuiMediaBox implements OnInit {
    @HostBinding('class.weui-media-box') _box: boolean = true;
    constructor() { }
    ngOnInit() { }
}



// box info start
@Directive({
    selector: 'box-info',
})
export class WeuiMediaBoxInfo {
    @HostBinding('class.weui-media-box__info') _info: boolean = true;
    @HostBinding('style.display') _display: string = 'block';
}

@Directive({
    selector: 'info-meta',
})
export class WeuiMediaBoxInfoMetaInfo {
    @HostBinding('class.weui-media-box__info__meta') _meta: boolean = true;
}

@Directive({
    selector: 'info-meta[extra]',
})
export class WeuiMediaBoxInfoMetaExtraInfo {
    @HostBinding('class.weui-media-box__info__meta_extra') _extra: boolean = true;
}
// box info end

// box text start
@Directive({
    selector: 'weui-box[text]',
})
export class WeuiMediaBoxText {
    @HostBinding('class.weui-media-box_text') _text: boolean = true;
}

@Directive({
    selector: 'box-title',
})
export class WeuiMediaBoxTitle {
    @HostBinding('class.weui-media-box__title') _title: boolean = true;
}

@Directive({
    selector: 'box-desc',
})
export class WeuiMediaBoxDesc {
    @HostBinding('class.weui-media-box__desc') _desc: boolean = true;
}
// box text end

@Directive({
    selector: 'weui-box[appmsg]',
})
export class WeuiMediaBoxAppmsgInfo {
    @HostBinding('class.weui-media-box_appmsg') _appmsg: boolean = true;
}

@Directive({
    selector: 'weui-box[small-appmsg]',
})
export class WeuiMediaBoxSmallAppmsgInfo {
    @HostBinding('class.weui-media-box_small-appmsg') _small_appmsg: boolean = true;
}


// 布局站位
@Directive({
    selector: 'box-hd',
})
export class WeuiMediaBoxHd {
    @HostBinding('class.weui-media-box__hd') _box_hd: boolean = true;
}


@Directive({
    selector: '[box-thumb],box-thumb',
})
export class WeuiMediaBoxThumb {
    @HostBinding('class.weui-media-box__thumb') _box_thumb: boolean = true;
}

@Directive({
    selector: 'box-bd',
})
export class WeuiMediaBoxBd {
    @HostBinding('class.weui-media-box__bd') _box_bd: boolean = true;
}

// 布局站位结束
