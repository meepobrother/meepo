import { Widget } from '../widget';

export class MeepoMarqueeDefault extends Widget {
    items: any[] = [];
    direction: string = 'bottom';
    
    constructor() {
        super();
        this.type = 'meepo-marquee';
        this.name = '滚动';

        this.containerStyle = {
            'margin-top': '0px'
        }

        this.styleObj = {
            'margin-top': '0px'
        }

        this.items = [];
    }
}
