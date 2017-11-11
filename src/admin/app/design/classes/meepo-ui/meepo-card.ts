import { Widget } from '../widget';

export class MeepoCardDefault extends Widget{
    constructor(){
        super();
        this.type = 'meepo-card';
        this.name = '卡片';

        this.styleObj = {
            'margin-top': '0px'
        }
        this.containerStyle = {
            'margin-top': '0px'
        }
    }
}
