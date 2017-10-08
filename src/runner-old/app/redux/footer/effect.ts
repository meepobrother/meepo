import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { of } from 'rxjs/observable/of';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { CoreUtilService } from '../../meepo-core/core-util.service';
import * as actions from './action';

@Injectable()
export class FooterEffects {
    @Effect() init$: Observable<Action> = this.actions$.ofType(actions.INIT)
    .map(toPayload)
    .mergeMap(payload => {
        return this.core.post('setting.get',{code: payload})
        .map((data: any) => {
            return new actions.InitSuccessAction(data.info);
        })
        .catch((err) => {
            return of(new actions.InitFailAction(err));
        })
    });

    constructor(
        private http: Http,
        private actions$: Actions,
        public core: CoreUtilService
    ) {
        console.log('FooterEffects constructor');
    }
}
