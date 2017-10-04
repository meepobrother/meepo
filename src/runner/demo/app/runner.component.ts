import { Component, OnInit, Optional, SkipSelf, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageBase } from '@meepo/core';
@Component({
    selector: 'runner-root',
    template: `
        <router-outlet></router-outlet>
    `
})
export class RunnerComponent extends PageBase {
    title: string = '小明跑腿';
    constructor(
        @Inject(DOCUMENT) public _doc: any
    ) {
        super();
    }
    ngOnInit() {
        this.setDoc(this._doc).setTitle(this.title);
    }
}
