
import { Widget } from '../widget';

export class JdHomeHeaderDefault extends Widget{
    show: boolean = true;
    bgImg: string;
    info: any;
    bgStyle: any;
    items: any[] = [];

    constructor(){
        super();
        
        this.type = 'jd-home-header';
        this.name = '个人头部';

        this.bgImg = './assets/redbg.jpg';

        this.bgStyle = {
            'background': '#bf0000'
        }

        this.containerStyle = {
            'margin-top': '0px'
        }

        this.styleObj = {
            'margin-top': '0px'
        }

        this.items = [
            {
                title: '我的帖子',
                num: 0,
                link: ''
            },
            {
                title: '我的服务',
                num: 0,
                link: ''
            },
            {
                title: '我的问答',
                num: 0,
                link: ''
            }
        ]
    }
}