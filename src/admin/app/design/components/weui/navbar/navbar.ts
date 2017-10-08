import { WeuiWidget } from '../widget';
export class Navbar extends WeuiWidget{
    constructor(){
        super();
        this.type = 'navbar';
        this.name = '顶部切换';
        this.content = [];
    }
}