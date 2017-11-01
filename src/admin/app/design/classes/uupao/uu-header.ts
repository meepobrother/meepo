
import { Widget } from '../widget';

export class UuHeaderDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    dataSource: string = '';

    left: any = {
        icon: 'fa fa-user',
        title: ''
    };

    right: any = {
        title: '郑州市',
        icon: 'fa fa-chevron-down'
    };

    constructor(){
        super();
        this.type = 'uu-header';
        this.name = 'UU header';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
        this.dataSource = '';
    }
}