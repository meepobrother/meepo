import { LayoutHeader } from '../../../layout-header';
import { LayoutBody } from '../../../layout-body';
import { LayoutFooter } from '../../../layout-footer';
import { LayoutContainer } from '../../../layout-container';
import { LayoutMenu } from '../../../layout-menu';
import { Layout } from '../../layout';


const _layoutHeader = new LayoutHeader();
const headerStyle: Map<string, string> = new Map();
headerStyle.set('background', 'red');
_layoutHeader.containerStyle = headerStyle;

const _layoutBody = new LayoutBody();
const bodyStyle: Map<string, string> = new Map();
bodyStyle.set('background', 'green');
_layoutBody.containerStyle = bodyStyle;

const _layoutFooter = new LayoutFooter();
const footerStyle: Map<string, string> = new Map();
footerStyle.set('background', 'red');
_layoutFooter.containerStyle = footerStyle;


// 左
const _layoutLeftMenu = new LayoutMenu();
const menuLeftStyle: Map<string, string> = new Map();
menuLeftStyle.set('background', 'rgba(0, 0, 0, 0.38)');
_layoutLeftMenu.containerStyle = menuLeftStyle;
_layoutLeftMenu.setLeft();

export const _bodyFooterMenuLeftLayout = new Layout();
_bodyFooterMenuLeftLayout.name = '中下-布局';

const _layoutContainer = new LayoutContainer();

_layoutContainer.children = [
    _layoutBody,
    _layoutFooter,
    _layoutLeftMenu
];

_bodyFooterMenuLeftLayout.children = [
    _layoutContainer
];
