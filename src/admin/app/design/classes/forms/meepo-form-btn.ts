
import { Widget } from '../widget';


export class MeepoFormBtnDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    title: string = '按钮';
    icon: string = '';

    __do: string;
    __post: any;
    constructor(){
        super();
        this.type = 'meepo-form-btn';
        this.name = '按钮';

        this.content = '提交';
        this.icon = 'fa fa-user';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}