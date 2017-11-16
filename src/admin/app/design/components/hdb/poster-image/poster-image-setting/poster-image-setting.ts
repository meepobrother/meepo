import { Component, OnInit, Input } from '@angular/core';
import { PosterImageDefault } from '../../../../classes';
@Component({
    selector: 'poster-image-setting',
    templateUrl: './poster-image-setting.html',
    styleUrls: ['./poster-image-setting.scss']
})
export class PosterImageSetting implements OnInit {
    @Input() widget: PosterImageDefault = new PosterImageDefault();
    constructor() { }

    ngOnInit() { }
}