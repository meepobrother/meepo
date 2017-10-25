
import { Widget } from '../widget';


export class MeepoFormTimeEndDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    placeholder: string = '请选择截止时间';
    title: string = '截止时间';

    constructor(){
        super();
        this.type = 'meepo-form-time-end';
        this.name = '截止时间';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}