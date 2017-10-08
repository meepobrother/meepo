import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { of } from 'rxjs/observable/of';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as actions from './action';

import { CoreUtilService } from '../../meepo-core/core-util.service';
import {RunnerUtilService} from "../../runner-components/runner-util.service";

@Injectable()
export class RoleEffects {
    @Effect() init$: Observable<Action> = this.actions$.ofType(actions.INIT)
    .map(toPayload)
    .switchMap(payload => {
        return this.core.post('cloud.modules',{})
        .map((data: any) => {
            let modules = data.info;
            let items = [];
            modules.map(res=>{
                if(res['assistive']){
                    res['assistive'].map(r=>{
                        items.push(r);
                    });
                }
            });
            return new actions.InitSuccessAction(items);
        })
        .catch((err) => {
            return of( new actions.InitFailAction(err));
        })
    });

    constructor(
        private http: Http,
        private actions$: Actions,
        public core: CoreUtilService,
        public util: RunnerUtilService
    ) {
        console.log('RoleEffects constructor');
    }
}
