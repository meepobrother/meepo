import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HSmallChat } from './h-small-chat';
@NgModule({
    declarations: [
        HSmallChat
    ],
    imports: [ CommonModule ],
    exports: [
        HSmallChat
    ],
    providers: [],
})
export class HSmallChatModule {}