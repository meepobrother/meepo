import { Widget } from '../widget';

export class MeepoVideoDefault extends Widget {
    videoUrl: string = '';
    btnTitle: string = '立即播放';
    hasGift: boolean = false;
    constructor() {
        super();
        this.type = 'meepo-video';
        this.name = '视频';

        this.containerStyle = {
            'margin-top': '0px'
        }

        this.styleObj = {
            'margin-top': '0px'
        }
    }
}
