import { Component, OnInit, Input } from '@angular/core';
import { PosterImageDefault } from '../../../../classes';

@Component({
    selector: 'poster-image-view',
    templateUrl: './poster-image-view.html',
    styleUrls: ['./poster-image-view.scss']
})
export class PosterImageView implements OnInit {
    @Input() widget: PosterImageDefault = new PosterImageDefault();
    constructor() { }

    ngOnInit() { }
}