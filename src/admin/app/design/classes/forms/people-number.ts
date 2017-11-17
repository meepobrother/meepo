
import { Widget } from '../widget';


export class PeopleNumberDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    placeholder: string = '请输入需要人数';
    title: string = '人数';

    constructor(){
        super();
        this.type = 'people-number';
        this.name = '人数';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}