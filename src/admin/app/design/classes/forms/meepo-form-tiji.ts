
import { Widget } from '../widget';


export class MeepoFormTijiDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    placeholder: string = '请输入体积';
    title: string = '体积';

    constructor(){
        super();
        this.type = 'meepo-form-tiji';
        this.name = '体积';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}