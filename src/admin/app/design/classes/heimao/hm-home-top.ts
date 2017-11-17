
import { Widget } from '../widget';

export class HmHomeTopDefault extends Widget {
    show: boolean = true;

    rights: any[] = [];
    items: any[] = [];
    title: string;

    constructor() {
        super();
        this.type = 'hm-home-top';
        this.name = '会员头';

        this.containerStyle = {
            'margin-top': '0'
        }
    }
}