
import { Widget } from '../widget';

export class UuSwiperDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    dataSource: string = '';

    constructor(){
        super();
        this.type = 'uu-swiper';
        this.name = 'UU广告';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
        this.dataSource = '';

        this.children = [
            {
                image: 'https://otherfiles.uupt.com/ActivityScene/20170524/03c0c70b7f2546b88240320c567dfe50_big.png',
                link: ['']
            },
            {
                image: 'https://otherfiles.uupt.com/ActivityScene/20170524/03c0c70b7f2546b88240320c567dfe50_big.png',
                link: ['']
            },
            {
                image: 'https://otherfiles.uupt.com/ActivityScene/20170524/03c0c70b7f2546b88240320c567dfe50_big.png',
                link: ['']
            }
        ];
    }
}