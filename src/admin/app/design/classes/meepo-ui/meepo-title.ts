import { Widget } from '../widget';

export class MeepoTitleDefault extends Widget {
    title: string = '';
    
    constructor() {
        super();
        this.type = 'meepo-title';
        this.name = '文本';

        this.containerStyle = {
            'margin-top': '0px'
        }

        this.styleObj = {
            'margin-top': '0px'
        }

        this.title = '为您推荐';
    }
}
