import { LayoutHeader } from '../../../layout-header';
import { LayoutBody } from '../../../layout-body';
import { LayoutFooter } from '../../../layout-footer';
import { LayoutContainer } from '../../../layout-container';
import { LayoutMenu } from '../../../layout-menu';
import { Layout } from '../../layout';


const _layoutHeader = new LayoutHeader();
_layoutHeader.containerStyle = { 'background': 'red' };

const _layoutBody = new LayoutBody();
_layoutBody.containerStyle = { 'background': 'green' };

const _layoutFooter = new LayoutFooter();
_layoutFooter.containerStyle = { 'background': 'red' };


// 左
const _layoutLeftMenu = new LayoutMenu();
_layoutLeftMenu.containerStyle = { 'background': 'rgba(0, 0, 0, 0.38)' };
_layoutLeftMenu.setLeft();


export const headerBodyFooterMenuLeft = new LayoutContainer();

headerBodyFooterMenuLeft.children = [
    _layoutHeader,
    _layoutBody,
    _layoutFooter,
    _layoutLeftMenu
];

