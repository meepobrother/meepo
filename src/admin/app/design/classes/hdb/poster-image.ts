
import { Widget } from '../widget';

export class PosterImageDefault extends Widget {
    show: boolean = true;
    image: string = 'http://img.small.hudongba.com/upload/_oss/userposterimageimg/201704/19/51492567551429_posterimage5.jpg@!wap-detail-post-image';

    constructor() {
        super();
        this.type = 'poster-image';
        this.name = '海报';

        this.containerStyle = {
            'margin-top': '0px',
            'padding-top': '0px'
        }
    }
}