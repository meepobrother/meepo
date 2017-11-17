
import { Widget } from '../widget';

export class AddressCityDefault extends Widget {
    show: boolean = true;
    items: any[] = [];

    constructor() {
        super();
        this.type = 'address-city';
        this.name = '城市定位';

        this.containerStyle = {
            'margin-top': '0px',
            'padding-top': '0px'
        }
    }
}