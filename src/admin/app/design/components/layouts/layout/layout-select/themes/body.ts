import {
    LayoutHeader, LayoutBody, LayoutFooter,
    LayoutContainerModel, Layout, LayoutMenu
} from '../../../../../classes';



const _layoutHeader = new LayoutHeader();
_layoutHeader.containerStyle = { 'background': '#19b394' };

const _layoutBody = new LayoutBody();
_layoutBody.containerStyle = { 'background': 'green' };

const _layoutFooter = new LayoutFooter();
_layoutFooter.containerStyle = { 'background': '#19b394' };


const _layoutMenu = new LayoutMenu();
_layoutMenu.containerStyle = { 'background': 'rgba(0, 0, 0, 0.38)' };


export const body = new LayoutContainerModel();

body.children = [
    _layoutBody
];
