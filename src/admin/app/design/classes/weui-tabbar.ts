import { WeuiWidget } from './weui-widget';

export class Tabbar extends WeuiWidget{
    content: any[] = [];
    constructor(){
        super();
        this.type = 'tabbar';
        this.name = '底部导航';
    }
}
