import { Component, OnInit, Input } from '@angular/core';
import { MeepoVideoDefault } from '../../../../classes';

import Chimee from 'chimee';

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
    
    constructor() { 

    }

    ngOnInit() { 
        const chimee = new Chimee('#wrapper');
        chimee.on('play', () => console.log('play!!'));
        chimee.load('http://cdn.toxicjohann.com/lostStar.mp4');
        chimee.play(); // play!!
    }
    playAnimate() {
        
    }

    playVoice(){

    }
}