import { LayoutWidget } from '../widget';
import { LayoutBody } from '../layout-body';
import { LayoutHeader } from '../layout-header';
import { LayoutMenu } from '../layout-menu';
import { LayoutFooter } from '../layout-footer';

export class LayoutContainer extends LayoutWidget {

    header: LayoutHeader = new LayoutHeader();
    menu: LayoutMenu = new LayoutMenu();
    footer: LayoutFooter = new LayoutFooter();
    body: LayoutBody = new LayoutBody();

    active: boolean = false;
    constructor() {
        super();
        this.type = 'layout-container';
        this.name = '布局-容器';
        this.title = '页面';
        this.children = [];

        this.setContainerClass();
    }

    setContainerClass() {
        this.containerClass = { 'layout-container': true };
    }
}