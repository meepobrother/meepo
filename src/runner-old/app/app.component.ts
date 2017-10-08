import {Component,Injectable} from '@angular/core';
import { Store } from '@ngrx/store';
import { sliderSelector } from './redux';
import * as actions from './redux/slider/action';
import { Router } from '@angular/router';

import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    slider$: any;
    constructor(
        public store$: Store<any>,
        public router: Router
    ){
        this.slider$ = this.store$.select(sliderSelector);
    }

    ngOnInit(){}
}