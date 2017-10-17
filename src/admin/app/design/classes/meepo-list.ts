import { Widget } from './widget';

export class MeepoList extends Widget {
    constructor() {
        super();
        this.type = 'meepo-list';
        this.name = '列表组件';
        this.children = [
            {
                title: '测试',
                code: 'all'
            }
        ];
        this.styleObj = { color: '#fff' };
        this.containerStyle = { color: '#fff' };
    }
}