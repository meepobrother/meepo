import { WeuiWidget } from '../widget';
import uuid from 'uuid';
import { Layout, LayoutContainer } from '../../layouts';
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
        this.type = 'page';
        this.name = '页面';
        this.title = '测试页面';
        this.code = uuid();
        const layout = new Layout();
        const layoutContainer = new LayoutContainer();
        layout.children = [
            layoutContainer
        ];
        this.children = [
            layout
        ];
    }
}