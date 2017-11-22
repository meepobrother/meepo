
import { Widget } from '../widget';

export class ImFooterDefault extends Widget{
    show: boolean = true;
    tools: any[] = [];

    __do: any = {};
    constructor(){
        super();
        this.type = 'im-footer';
        this.name = '发送消息';

        this.containerStyle = {
            'margin-top': '0px'
        }

        this.styleObj = {
            'margin-top': '0px'
        }
        
        this.tools = [];

        this.freeViewStyle = {
            'position': 'relative',
            'width': '100%',
            'height': '100%'
        }
    }
}