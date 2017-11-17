
import { Widget } from '../widget';

export class ActiveListDefault extends Widget {
    show: boolean = true;
    items: any[] = [
        {
            title: '彩色登山节|5.20周六 彩粉炮弹告白，花样登山越野，五彩虐爆朋友圈！',
            image: 'http://img.small.hudongba.com/upload/_oss/userposterimageimg/201704/19/51492567551429_posterimage5.jpg@!wap-detail-post-image',
            time: '5月20日 13:00 开始',
            address: '石景山区',
            price: '29'
        }
    ];

    constructor() {
        super();
        this.type = 'active-list';
        this.name = '活动列表';

        this.containerStyle = {
            'margin-top': '0px',
            'padding-top': '0px'
        }
    }
}