
import { Widget } from '../widget';

export class JdHomeOrderDefault extends Widget{
    show: boolean = true;
    items: any[] = [];
    leftTitle: string = '我的订单';
    rightTitle: string = '全部订单';

    constructor(){
        super();
        this.type = 'jd-home-order';
        this.name = '个人订单';

        this.containerStyle = {
            'margin-top': '0px'
        };
        this.styleObj = {
            'margin-top': '0px'
        };

        this.items = [
            {
                title: '待接单',
                icon: 'assets/images/home/order1.png',
                link: ''
            },
            {
                title: '进行中',
                icon: 'assets/images/home/order2.png',
                link: ''
            },
            {
                title: '待确认',
                icon: 'assets/images/home/order4.png',
                link: ''
            },
            {
                title: '已撤销',
                icon: 'assets/images/home/order3.png',
                link: ''
            }
        ]
    }
}