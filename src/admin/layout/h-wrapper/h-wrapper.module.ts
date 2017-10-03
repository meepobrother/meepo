import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HWrapper } from './h-wrapper';
import { HChatBox } from './h-chat-box';
import { HNavigation } from './h-navigation';
import { HPage } from './h-page';
import { HSidebar } from './h-sidebar';
import { HSmallChat } from './h-small-chat';
import { HControlerService } from './h-controler';

const components = [
    HWrapper,
    HChatBox,
    HNavigation,
    HPage,
    HSidebar,
    HSmallChat
];


@NgModule({
    declarations: [
        ...components
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ...components
    ],
    providers: [
        HControlerService
    ]
})
export class HWrapperModule {}