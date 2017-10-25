
import { Widget } from '../widget';


export class MeepoFormInputDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    placeholder: string = '请输入something';
    title: string = '输入框';

    constructor(){
        super();
        this.type = 'meepo-form-input';
        this.name = '输入框';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}

