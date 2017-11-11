import { Widget } from '../widget';

export class MeepoPasswordDefault extends Widget {
    items: any[] = [];
    direction: string = 'bottom';
    
    constructor() {
        super();
        this.type = 'meepo-password';
        this.name = '密码';

        this.containerStyle = {
            'margin-top': '0px'
        }

        this.styleObj = {
            'margin-top': '0px'
        }

        this.items = [];
    }
}
