
import { Widget } from '../widget';

export class MeepoFormTagDefault extends Widget{
    show: boolean = true;
    required: boolean = true;

    constructor(){
        super();
        this.type = 'meepo-form-tag';
        this.name = '标签选择';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}