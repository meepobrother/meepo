import { LayoutHeader } from '../../../layout-header';
import { LayoutBody } from '../../../layout-body';
import { LayoutFooter } from '../../../layout-footer';
import { LayoutContainer } from '../../../layout-container';
import { LayoutMenu } from '../../../layout-menu';
import { Layout } from '../../layout';


const _layoutHeader = new LayoutHeader();
const _layoutBody = new LayoutBody();
const _layoutFooter = new LayoutFooter();
const _layoutMenu = new LayoutMenu();

export const _headerBodyFooterLayout = new Layout();
_headerBodyFooterLayout.name = '上中下布局';
const _layoutContainer = new LayoutContainer();

_layoutContainer.children = [
    _layoutHeader,
    _layoutBody,
    _layoutFooter
];

_headerBodyFooterLayout.children = [
    _layoutContainer
];




