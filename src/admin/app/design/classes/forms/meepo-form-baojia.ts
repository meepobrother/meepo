
import { Widget } from '../widget';

export class MeepoFormBaojiaDefault extends Widget{
    show: boolean = true;
    required: boolean = true;

    constructor(){
        super();
        this.type = 'meepo-form-baojia';
        this.name = '保价选择';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}