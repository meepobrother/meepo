import { Component, OnInit, Input } from '@angular/core';
import { MeepoVideoDefault } from '../../../../classes';
@Component({
    selector: 'meepo-video-view',
    templateUrl: './meepo-video-view.html',
    styleUrls: ['./meepo-video-view.scss']
})
export class MeepoVideoView implements OnInit {
    @Input() widget: MeepoVideoDefault = new MeepoVideoDefault();
    
    playIcon: number = 0;
    optStr: string = 'add';
    playTimer: any;
    
    constructor() { }

    ngOnInit() { }
    playAnimate() {
        this.playTimer = setInterval(() => {
            if (this.playIcon >= 3) {
                this.playIcon--;
                this.optStr = 'del'
            } else if (this.playIcon <= 0) {
                this.playIcon = 3;
                this.optStr = 'add'
            } else {
                if (this.optStr == 'add') {
                    this.playIcon++;
                } else {
                    this.playIcon--;
                }
            }

        }, 300)
    }

    playVoice(){

    }
}