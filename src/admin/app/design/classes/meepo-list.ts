import { Widget } from './widget';

export class MeepoList extends Widget {
    model: string = 'list-model-1';
    constructor() {
        super();
        this.type = 'meepo-list';
        this.name = '列表组件';
        this.children = [
            {
                title: '测试',
                code: 'all',
                image: './assets/img/a1.jpg'
            },
            {
                title: '测试',
                code: 'all',
                image: './assets/img/a2.jpg'
            },
            {
                title: '测试',
                code: 'all',
                image: './assets/img/a3.jpg'
            }
        ];
        this.styleObj = { color: '#fff' };
        this.containerStyle = { color: '#fff' };
    }
}