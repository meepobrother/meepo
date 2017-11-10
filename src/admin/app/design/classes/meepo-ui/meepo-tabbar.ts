import { Widget } from '../widget';

export class MeepoTabbarDefault extends Widget {
    title: string = '';
    
    constructor() {
        super();
        this.type = 'meepo-tabbar';
        this.name = 'tabbar';

        this.containerStyle = {
            'margin-top': '0px'
        }

        this.styleObj = {
            'margin-top': '0px'
        }

    }
}
