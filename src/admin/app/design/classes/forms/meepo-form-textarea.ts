
import { Widget } from '../widget';


export class MeepoFormTextareaDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    placeholder: string = '请输入文本';
    title: string = '文本';

    field_name: string;

    constructor(){
        super();
        this.type = 'meepo-form-textarea';
        this.name = '文本';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}
