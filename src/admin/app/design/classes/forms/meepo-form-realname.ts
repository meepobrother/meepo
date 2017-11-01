
import { Widget } from '../widget';


export class MeepoFormRealnameDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    placeholder: string = '请输入真实姓名';
    title: string = '真实姓名';

    constructor(){
        super();
        this.type = 'meepo-form-realname';
        this.name = '真实姓名';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}

