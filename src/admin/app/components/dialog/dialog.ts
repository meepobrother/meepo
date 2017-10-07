import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'meepo-dialog',
    template: `
        <ng-content></ng-content>
    `,
    styleUrls: ['./dialog.scss']
})
export class MeepoDialog implements OnInit {
    constructor() { }

    ngOnInit() { }
}



@Component({
    selector: 'meepo-dialog-content',
    template: `
        <ng-content></ng-content>
    `,
    styleUrls: ['./dialog-content.scss']
})
export class MeepoDialogContent implements OnInit {
    constructor() { }

    ngOnInit() { }
}