
import { Widget } from '../widget';

export class JdHomeListDefault extends Widget{
    show: boolean = true;
    bgImg: string;
    info: any;
    bgStyle: any;
    items: any[] = [];

    constructor(){
        super();
        
        this.type = 'jd-home-list';
        this.name = '个人列表';

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
                title: '我的地址',
                icon: 'assets/images/my-address.png',
                link: '/home/my-address'
            }
        ]
    }
}