import { Widget } from '../widget';

export class MeepoVoiceDefault extends Widget {
    voiceUrl: string = '';
    giftUrl: string = '';

    hasGift: boolean = false;
    btnTitle: string = '立即播放';
    constructor() {
        super();
        this.type = 'meepo-voice';
        this.name = '视频';

        this.containerStyle = {
            'margin-top': '0px'
        }

        this.styleObj = {
            'margin-top': '0px'
        }
    }
}
