import { Widget } from './widget';

export class MeepoTasks extends Widget{
    itemStyle: any = {
        'margin-top': 0,
        'margin-left': 0,        
        'margin-right': 0,        
        'margin-bottom': 0        
    }
    constructor(){
        super();
        this.type = 'meepo-tasks';
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
        this.containerStyle = {
            'margin-top': 0,
            'margin-bottom': 0,
            'margin-left': 0,
            'margin-right': 0
        }
    }
}