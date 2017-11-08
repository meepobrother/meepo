
import { Widget } from '../widget';

export class JdHomeOrderDefault extends Widget{
    show: boolean = true;

    constructor(){
        super();
        this.type = 'jd-home-order';
        this.name = '个人订单';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}