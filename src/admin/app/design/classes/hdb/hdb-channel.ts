
import { Widget } from '../widget';

export class HdbChannelDefault extends Widget {
    show: boolean = true;

    source: any = {
        action: '',
        params: {},
        title: ''
    };

    isUrl: boolean = false;
    items: any[] = [];

    constructor() {
        super();
        this.type = 'hdb-channel';
        this.name = '频道列表';

        this.containerStyle = {
            'margin-top': '0px',
            'padding-top': '0px'
        }
    }
}