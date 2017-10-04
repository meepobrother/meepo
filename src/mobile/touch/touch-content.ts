import { Component, OnInit, ViewChild, Input } from '@angular/core';
@Component({
    selector: 'touch-content',
    template: `
        <div class="weui-mask weui-animate-fade-in" (click)="toggleContent($event)" *ngIf="showMark"></div>
        <div *ngIf="showMark">
            <ng-content></ng-content>
        </div>
    `,
    styles: [
        `.weui-grids {
            position: absolute;
            bottom: 0;
            left: 0px;
            right: 0px;
            background: #fff;
        }`,
        `
        weui-grid{
            width: 25%;
        }
        `
    ]
})
export class TouchContent implements OnInit {
    @Input() showMark: boolean = false;
    constructor() { }
    ngOnInit() { }
    toggleContent(evt: any) {
        this.showMark = !this.showMark;
        evt.stopPropagation();
        evt.preventDefault();
    }
}
