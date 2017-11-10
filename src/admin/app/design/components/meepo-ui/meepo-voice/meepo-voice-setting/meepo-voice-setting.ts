import { Component, OnInit, Input } from '@angular/core';
import { MeepoVoiceDefault } from '../../../../classes';

@Component({
    selector: 'meepo-voice-setting',
    templateUrl: './meepo-voice-setting.html',
    styleUrls: ['./meepo-voice-setting.scss']
})
export class MeepoVoiceSetting implements OnInit {
    @Input() widget: MeepoVoiceDefault = new MeepoVoiceDefault();
    constructor() { }

    ngOnInit() { }
}