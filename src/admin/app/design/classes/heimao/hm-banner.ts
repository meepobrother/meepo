
import { Widget } from '../widget';

export class HmBannerDefault extends Widget {
    show: boolean = true;
    single: boolean = false;
    items: any[] = [
        {
            image: 'http://img.chwlsq.com/1/config/1703201536549767696.png',
            title: '寻找信息',
            desc: '达人就在附近',
            style: {
                backgroundColor: '#5ad87e'
            }
        }, {
            image: 'http://img.chwlsq.com/1/config/1703201537093601180.png',
            title: '发布信息',
            desc: '小技能赚大钱',
            style: {
                backgroundColor: '#06c9b9'
            }
        }
    ];

    constructor() {
        super();
        this.type = 'hm-banner';
        this.name = '广告导航';

        this.containerStyle = {
            'margin-top': '0px',
            'padding-top': '0px'
        }
    }
}