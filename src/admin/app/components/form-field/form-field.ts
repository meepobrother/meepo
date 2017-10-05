import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { first, startWith } from '@angular/cdk/rxjs';
import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    ContentChildren,
    ElementRef,
    Inject,
    Input,
    Optional,
    QueryList, Renderer2,
    ViewChild,
    ViewEncapsulation,
    HostBinding
} from '@angular/core';
import {
    FloatPlaceholderType,
    MAT_PLACEHOLDER_GLOBAL_OPTIONS,
    PlaceholderOptions,
} from '@angular/material/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { MeepoError } from './error';
import { MeepoFormFieldControl } from './form-field-control';
import { MeepoInput } from './input';

import {
    getMatFormFieldDuplicatedHintError,
    getMatFormFieldMissingControlError,
    getMatFormFieldPlaceholderConflictError,
} from './form-field-errors';
import { MeepoHint } from './hint';
import { MeepoPlaceholder } from './placeholder';
import { MeepoPrefix } from './prefix';
import { MeepoSuffix } from './suffix';


let nextUniqueId = 0;


@Component({
    selector: 'meepo-input-container, meepo-form-field, form-field',
    templateUrl: './form-field.html',
    preserveWhitespaces: false
})
export class MeepoFormField implements AfterViewInit, AfterContentInit, AfterContentChecked {
    @HostBinding('class.form-group') _formGroup: boolean = true;
    @HostBinding('class.input-group') _inputGroup: boolean = false;

    @Input()
    set group(val: boolean){
        if(val){
            this._inputGroup = true;
            this._formGroup = false;
        }else{
            this._inputGroup = false;
            this._formGroup = true;
        }
    }

    @ContentChild(MeepoInput) _control: MeepoInput;
    ngAfterViewInit() { }
    ngAfterContentInit() {
        this._validateControlChild();
    }
    ngAfterContentChecked() { }

    protected _validateControlChild() {
        if (!this._control) {
            throw getMatFormFieldMissingControlError();
        }
        this._control.stateChanges.subscribe(() => {
            // 状态改变
        });
    }
}
