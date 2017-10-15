import { Widget } from './widget';

export class MeepoTags extends Widget {
    constructor() {
        super();
        this.type = 'meepo-tags';
        this.name = '标签组件';
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