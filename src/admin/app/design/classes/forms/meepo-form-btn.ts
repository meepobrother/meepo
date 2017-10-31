
import { Widget } from '../widget';


export class MeepoFormBtnDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    title: string = '按钮';

    constructor(){
        super();
        this.type = 'meepo-form-btn';
        this.name = '按钮';

        this.content = '提交';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}