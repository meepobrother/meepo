import { LayoutHeader } from '../../../layout-header';
import { LayoutBody } from '../../../layout-body';
import { LayoutFooter } from '../../../layout-footer';
import { LayoutContainerModel } from '../../../layout-container/layout-container';
import { LayoutMenu } from '../../../layout-menu';
import { Layout } from '../../layout';


const _layoutHeader = new LayoutHeader();
_layoutHeader.containerStyle = { 'background': '#19b394' };
_layoutHeader.show = true;

const _layoutFooter = new LayoutFooter();
_layoutFooter.containerStyle = { 'background': '#19b394' };
_layoutFooter.show = true;

export const headerBodyFooter = new LayoutContainerModel();
headerBodyFooter.header = _layoutHeader;
headerBodyFooter.footer = _layoutFooter;

