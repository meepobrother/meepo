import {Observable} from 'rxjs/Observable';
import {NgControl} from '@angular/forms';
export abstract class MeepoFormFieldControl<T> {
  readonly stateChanges: Observable<void>;
  readonly id: string;
  readonly placeholder: string;
}
