import { WeuiWidget } from '../widget';

export class WeuiPage extends WeuiWidget {
    type: string = 'page';
    name: string = '页面';
    code: string;
    title: string;
    keyword: string;
    desc: string;
    icon: string;
    active: boolean = false;
    constructor(){
        super();
    }
}