
import { Widget } from '../widget';

export class JdHomeMoneyDefault extends Widget{
    show: boolean = true;
    items: any[] = [];
    constructor(){
        super();
        this.type = 'jd-home-money';
        this.name = '个人钱包';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }

        this.items = [
            {
                title: '账户余额',
                num: '0.0'
            },
            {
                title: '我的积分',
                num: '0'
            },
            {
                title: '我的信誉',
                num: '0'
            }
        ];
    }
}