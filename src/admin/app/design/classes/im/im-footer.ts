
import { Widget } from '../widget';

export class ImFooterDefault extends Widget{
    show: boolean = true;
    tools: any[] = [];
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
            'position': 'absolute',
            'top': '0px',
            'left': '0px',
            'right': '0px',
            'bottom': '0px'
        }
    }
}