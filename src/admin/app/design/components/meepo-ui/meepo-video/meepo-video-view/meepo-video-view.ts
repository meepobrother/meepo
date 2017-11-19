import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { MeepoVideoDefault } from '../../../../classes';

import * as Chimee from 'chimee';

@Component({
    selector: 'meepo-video-view',
    templateUrl: './meepo-video-view.html',
    styleUrls: ['./meepo-video-view.scss']
})
export class MeepoVideoView implements OnInit {
    @Input() widget: MeepoVideoDefault = new MeepoVideoDefault();
    @ViewChild('wrapper') wrapper: ElementRef;
    constructor() { }
    ngOnInit() {
        const chimee = new Chimee(this.wrapper.nativeElement);
        chimee.on('play', () => console.log('play!!'));
        chimee.load(this.widget.videoUrl);
        chimee.play(); // play!!
    }
    playAnimate() { }
    playVoice() { }
}