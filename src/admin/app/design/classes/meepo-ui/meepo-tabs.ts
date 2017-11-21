import { Widget } from '../widget';

export class MeepoTabsDefault extends Widget {
    items: any[] = [];
    constructor() {
        super();
        this.type = 'meepo-tabs';
        this.name = 'tab切换';
        this.styleObj = { 'margin-bottom': '0px' };
        this.containerStyle = { 'margin-top': '0px' };
        this.items = [
            {
                title: '项目一',
                __do: '',
                __params: '',
                active: false
            },
            {
                title: '项目二',
                __do: '',
                __params: '',
                active: false
            },
            {
                title: '项目三',
                __do: '',
                __params: '',
                active: false
            },
            {
                title: '项目四',
                __do: '',
                __params: '',
                active: false
            }
        ]
    }
}
