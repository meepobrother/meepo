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


const _layoutMenu = new LayoutMenu();

export const _bodyLayout = new Layout();
_bodyLayout.name = '中下-布局';
const _layoutContainer = new LayoutContainer();

_layoutContainer.children = [
    _layoutBody
];

_bodyLayout.children = [
    _layoutContainer
];