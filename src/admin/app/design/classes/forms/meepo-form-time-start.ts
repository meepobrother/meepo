
import { Widget } from '../widget';


export class MeepoFormTimeStartDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    placeholder: string = '请选择开始时间';
    title: string = '开始时间';

    constructor(){
        super();
        this.type = 'meepo-form-time-start';
        this.name = '开始时间';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}
