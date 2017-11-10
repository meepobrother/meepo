import { Widget } from '../widget';

export class MeepoSwiperTags extends Widget {
    constructor() {
        super();
        this.type = 'meepo-swiper-tags';
        this.name = '滑动组件';
        this.children = [
            [
                {title: '测试',image: './assets/img/p1.jpg'},
                {title: '测试',image: './assets/img/p2.jpg'},
                {title: '测试',image: './assets/img/p3.jpg'},
                {title: '测试',image: './assets/img/p1.jpg'},
                {title: '测试',image: './assets/img/p2.jpg'},
                {title: '测试',image: './assets/img/p3.jpg'},
                {title: '测试',image: './assets/img/p1.jpg'},
                {title: '测试',image: './assets/img/p2.jpg'},
            ],
            [
                {title: '测试',image: './assets/img/p1.jpg'},
                {title: '测试',image: './assets/img/p2.jpg'},
                {title: '测试',image: './assets/img/p3.jpg'},
                {title: '测试',image: './assets/img/p1.jpg'},
                {title: '测试',image: './assets/img/p2.jpg'},
                {title: '测试',image: './assets/img/p3.jpg'},
                {title: '测试',image: './assets/img/p1.jpg'},
                {title: '测试',image: './assets/img/p2.jpg'},
            ]
        ];
        this.styleObj = { color: '#fff' };
        this.containerStyle = { color: '#fff' };
    }
}