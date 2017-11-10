import { Component, OnInit, Input } from '@angular/core';
import { MeepoVoiceDefault } from '../../../../classes';

@Component({
    selector: 'meepo-voice-view',
    templateUrl: './meepo-voice-view.html',
    styleUrls: ['./meepo-voice-view.scss']
})
export class MeepoVoiceView implements OnInit {
    @Input() widget: MeepoVoiceDefault = new MeepoVoiceDefault();
    
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