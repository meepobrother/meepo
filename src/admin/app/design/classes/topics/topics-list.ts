
import { Widget } from '../widget';

export class TopicsListDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    dataSource: string = '';
    constructor(){
        super();
        this.type = 'meepo-topics-list';
        this.name = '帖子列表';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}