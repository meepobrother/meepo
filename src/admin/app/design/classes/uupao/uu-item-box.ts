
import { Widget } from '../widget';

export class UuItemBoxDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    dataSource: string = '';

    constructor(){
        super();
        this.type = 'uu-item-box';
        this.name = 'UU项目';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
        this.dataSource = '';

        this.children = [
            {
                image: 'http://wechat.uupaotui.com/StyleV4/images/use_tp1.png',
                link: ['']
            },
            {
                image: 'http://wechat.uupaotui.com/StyleV4/images/use_tp2.png',
                link: ['']
            },
            {
                image: 'http://wechat.uupaotui.com/StyleV4/images/use_tp3.png',
                link: ['']
            },
            {
                image: 'http://wechat.uupaotui.com/StyleV4/images/use_tp4.png',
                link: ['']
            }
        ];
    }
}