import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import * as ChimeePlayer from 'chimee-player';

@Component({
    selector: 'video-item',
    templateUrl: './video-item.html',
    styleUrls: ['./video-item.scss']
})
export class VideoItemComponent implements OnInit {

    @ViewChild('wrapper') wrapper: ElementRef;
    @Input() video: any;
    plugins: any[] = [];
    constructor() { }
    ngOnInit() {

        var aggdPlugin = ChimeePlayer.popupFactory({
            name: 'time-ad',
            className: 'time-ad',
            title: false,
            body: `<em>小明跑腿</em><a href="https://meepo.com.cn" target="_blank"><img src="https://p.ssl.qhimg.com/t018fe4570caeb23e44.png"></a>`,
            offset: '0px 10px auto auto'
        });
        ChimeePlayer.install(aggdPlugin);
        this.plugins.push(aggdPlugin.name);

        const chimee2 = new ChimeePlayer({
            wrapper: this.wrapper.nativeElement,
            src: this.video.src,
            controls: true,
            autoplay: false,
            plugin: this.plugins
        });
    }
    playAnimate() { }
    playVoice() { }
}