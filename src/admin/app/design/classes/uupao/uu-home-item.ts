
import { Widget } from '../widget';

export class UuHomeItemDefault extends Widget{
    show: boolean = true;
    required: boolean = true;
    dataSource: string = '';

    constructor(){
        super();
        this.type = 'uu-home-item';
        this.name = 'UU个人中心项目';

        this.children = [
            {
                left: '',
                right: '',
                title: '我的订单'
            },
            {
                left: '',
                right: '',
                title: '收件记录'
            }
        ];

        this.containerStyle = {
            'margin-top': '0px'
        }
        this.styleObj = {
            'margin-top': '0px'
        }
        this.dataSource = '';
    }
}