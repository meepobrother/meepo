
import { Widget } from '../widget';

export class ImMessageDefault extends Widget{
    show: boolean = true;
    __do: string = 'message.getMessage';
    constructor(){
        super();
        this.type = 'im-message';
        this.name = '消息列表';

        this.containerStyle = {
            'margin-top': '0px'
        }

        this.styleObj = {
            'margin-top': '0px'
        }
    }
}