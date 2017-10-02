import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HChatBox } from './h-chat-box';
@NgModule({
    declarations: [
        HChatBox
    ],
    imports: [ CommonModule ],
    exports: [
        HChatBox
    ],
    providers: [],
})
export class HChatBoxModule {}