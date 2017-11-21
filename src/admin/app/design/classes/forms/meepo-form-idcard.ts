
import { Widget } from '../widget';


export class MeepoFormIdcardDefault extends Widget{
    show: boolean = true;

    img1: string = 'https://meepo.com.cn/meepo/images/card-img1.png';
    img2: string = 'https://meepo.com.cn/meepo/images/card-img2.png';

    constructor(){
        super();
        this.type = 'meepo-form-idcard';
        this.name = '证件上传';

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
    }
}