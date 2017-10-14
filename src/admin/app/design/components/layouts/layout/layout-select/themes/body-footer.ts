import { LayoutHeader } from '../../../layout-header';
import { LayoutBody } from '../../../layout-body';
import { LayoutFooter } from '../../../layout-footer';
import { LayoutContainerModel } from '../../../layout-container';
import { LayoutMenu } from '../../../layout-menu';
import { Layout } from '../../layout';



const _layoutHeader = new LayoutHeader();
_layoutHeader.containerStyle = { 'background': '#19b394' };


const _layoutBody = new LayoutBody();
_layoutBody.containerStyle = { 'background': 'green' };

const _layoutFooter = new LayoutFooter();
_layoutFooter.containerStyle = { 'background': '#19b394' };
_layoutFooter.show = true;


const _layoutMenu = new LayoutMenu();
_layoutMenu.containerStyle = { 'background': 'rgba(0, 0, 0, 0.38)' };


export const bodyFooter = new LayoutContainerModel();
bodyFooter.footer = _layoutFooter;




