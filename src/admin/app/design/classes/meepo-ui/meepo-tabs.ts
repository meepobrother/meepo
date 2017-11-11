import { Widget } from '../widget';

export class MeepoTabsDefault extends Widget {
    constructor() {
        super();
        this.type = 'meepo-tabs';
        this.name = 'tab切换';
        this.styleObj = { 'margin-bottom': '0px' };
        this.containerStyle = { 'margin-top': '0px' };
    }
}
