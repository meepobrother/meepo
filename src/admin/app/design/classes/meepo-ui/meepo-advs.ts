import { Widget } from '../widget';

export class MeepoAdvs extends Widget{
    constructor(){
        super();
        this.type = 'meepo-advs';
        this.name = '滑动广告';
        this.children = [
            {
                title: '广告',
                image: 'https://meepo.com.cn/addons/imeepos_runner/template/mobile/design/assets/img/p_big1.jpg'
            }
        ];
        this.styleObj = {
            'height': '120'
        }
        this.containerStyle = {
            'margin-top': 5,
            'margin-bottom': 0,
            'margin-left': 0,
            'margin-right': 0
        }
    }
}