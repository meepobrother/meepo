import { Component, OnInit, Inject } from '@angular/core';
import { PageBase } from '@meepo/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'test-page',
    template: `
        <h2>test core base</h2>
    `
})
export class TestPage extends PageBase {
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

