
import { Widget } from '../widget';

export class UuBenefitDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    dataSource: string = '';

    constructor(){
        super();
        this.type = 'uu-benefit';
        this.name = 'UU benefit';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
        this.dataSource = '';

        this.children = [
            {
                image: 'http://wechat.uupaotui.com/StyleV4/images/use_benefit4.png',
                title: '发货记录',
                link: ['']
            },
            {
                image: 'http://wechat.uupaotui.com/StyleV4/images/use_benefit5.png',
                title: '收货记录',
                link: ['']
            },
            {
                image: 'http://wechat.uupaotui.com/StyleV4/images/use_benefit2.png',
                title: '充值优惠中',
                link: ['']
            },
            {
                image: 'http://wechat.uupaotui.com/StyleV4/images/use_benefit3.png',
                title: '口令优惠券',
                link: ['']
            }
        ];
    }
}