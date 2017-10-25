
import { Widget } from '../widget';


export class MeepoFormTimeDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    placeholder: string = '请选择时间';
    title: string = '时间';

    constructor(){
        super();
        this.type = 'meepo-form-time';
        this.name = '时间';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}