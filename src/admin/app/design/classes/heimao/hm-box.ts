
import { Widget } from '../widget';

export class HmBoxDefault extends Widget {
    show: boolean = true;
    items: any[] = [
        {
            title: '特惠五折',
            desc: '开通VIP 享受优惠',
            image: 'http://img.chwlsq.com/1/config/1701151158590382126.png',
            style: {
                color: '#527acc'
            },
            link: ''
        }, {
            title: '优惠券攻略',
            desc: '低价风暴 必备之选',
            image: 'http://img.chwlsq.com/1/config/1701151202398328236.png',
            style: {
                color: '#FF8B17'
            },
            link: ''
        }, {
            title: '开通VIP',
            desc: '开通VIP 享受优惠',
            image: 'http://img.chwlsq.com/1/config/1701151204426324608.png',
            style: {
                color: '#FF8B17'
            },
            link: ''
        }, {
            title: '开通VIP',
            desc: '开通VIP 享受优惠',
            image: 'http://img.chwlsq.com/1/config/1701151204426324608.png',
            style: {
                color: '#FF8B17'
            },
            link: ''
        }
    ];

    constructor() {
        super();
        this.type = 'hm-box';
        this.name = '广告盒子';

        this.containerStyle = {
            'margin-top': '10px',
            'padding-top': '8px'  
        }
    }
}