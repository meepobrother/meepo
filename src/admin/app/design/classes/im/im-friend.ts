
import { Widget } from '../widget';

export class ImFriendDefault extends Widget{
    show: boolean = true;

    constructor(){
        super();
        this.type = 'im-friend';
        this.name = '朋友列表';

        this.containerStyle = {
            'margin-top': '0px'
        }

        this.styleObj = {
            'margin-top': '0px'
        }
    }
}