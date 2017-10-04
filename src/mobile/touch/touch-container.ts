import {
    Component, OnInit,
    HostBinding, ViewEncapsulation,
    ContentChild, HostListener
} from '@angular/core';
import { TouchContent } from './touch-content';

@Component({
    selector: 'touch-container',
    template: `
        <div class="touch-container"></div>
        <ng-content></ng-content>
    `,
    styleUrls: ['touch-container.css'],
    exportAs: 'touchContainer'
})
export class TouchContainer implements OnInit {
    showMark: boolean = true;
    // @HostBinding('class.touch-container') _container: boolean = true;
    @ContentChild(TouchContent) content: TouchContent;
    constructor() { }
    ngOnInit() { }

    toggleContent() {
        this.showMark = !this.showMark;
    }

    @HostListener('click', ['$event'])
    click(evt: any) {
        this.content.toggleContent(evt);
        evt.stopPropagation();
        evt.preventDefault();
    }
}
