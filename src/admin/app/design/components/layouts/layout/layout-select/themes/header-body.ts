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


const _layoutMenu = new LayoutMenu();
_layoutMenu.containerStyle = { 'background': 'rgba(0, 0, 0, 0.38)' };

export const _headerBodyLayout = new Layout();
const _layoutContainer = new LayoutContainer();

_layoutContainer.children = [
    _layoutHeader,
    _layoutBody
];

_headerBodyLayout.children = [
    _layoutContainer
];