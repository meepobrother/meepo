
import { Widget } from '../widget';

export class UuHomeHeaderDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    dataSource: string = '';

    constructor(){
        super();
        this.type = 'uu-home-header';
        this.name = 'UU项目';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
        this.dataSource = '';
    }
}