
import { Widget } from '../widget';

export class JdHomeMoneyDefault extends Widget{
    show: boolean = true;

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
    }
}