
import { WeBase } from './WeBase';
import { HttpClient } from '@angular/common/http';

import {Component} from '@angular/core';

@Component({
    selector: 'demo-page',
    template: `
        demo page
    `
})
export class DemoPage extends WeBase{
    constructor(
        public http: HttpClient
    ){
        super(http,'imeepos_demo');
    }
}