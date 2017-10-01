import { Component, OnInit, Inject } from '@angular/core';
import { PageBase } from '@meepo/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'test-core-base',
    template: `
        <h2>test core base</h2>
    `
})
export class TestCoreBase extends PageBase {
    title: string = '小明跑腿';
    constructor(
        @Inject(DOCUMENT) _document$: any
    ) {
        super(_document$);
    }
}

