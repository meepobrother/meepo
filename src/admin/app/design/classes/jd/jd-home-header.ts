
import { Widget } from '../widget';

export class JdHomeHeaderDefault extends Widget{
    show: boolean = true;

    constructor(){
        super();
        this.type = 'jd-home-header';
        this.name = '个人头部';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}