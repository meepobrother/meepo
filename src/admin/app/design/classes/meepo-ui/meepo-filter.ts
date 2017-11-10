import { Widget } from '../widget';

export class MeepoFilter extends Widget{
    constructor(){
        super();
        this.type = 'meepo-filter';
        this.name = '条件过滤';
        this.children = [
            {
                title: '全部',
                code: 'all'
            }
        ];
        this.styleObj = {
            'height': '120'
        }
        this.containerStyle = {}
    }
}