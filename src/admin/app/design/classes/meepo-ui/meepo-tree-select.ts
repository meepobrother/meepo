import { Widget } from '../widget';

export class MeepoTreeSelectDefault extends Widget {
    title: string = '';
    
    constructor() {
        super();
        this.type = 'meepo-tree-select';
        this.name = '文本';

        this.containerStyle = {
            'margin-top': '0px'
        }

        this.styleObj = {
            'margin-top': '0px'
        }

        this.title = '文本文本文本文本文本文本文本文本文本文本文本文本文本';
    }
}
