import { Directive, Component, ContentChild, Input } from '@angular/core';
import { isTrueProperty } from '../util';
@Component({
    selector: 'alert',
    template: `
        <ng-container *ngIf="_open">
            <button *ngIf="_close" class="close" (click)="onClose()" type="button">×</button>
            <ng-content></ng-content>
        </ng-container>
    `
})
export class Alert {
    _close: boolean = false;
    _open: boolean = true;
    @Input()
    set close(val: boolean) {
        this._close = isTrueProperty(val);
    }
    onClose(){
        this._open = false;
    }
}

@Directive({
    selector: 'alert[success]',
})
export class AlertSuccess { }

@Directive({
    selector: 'alert[info]',
})
export class AlertInfo { }

@Directive({
    selector: 'alert[warning]',
})
export class AlertWarning { }

@Directive({
    selector: 'alert[danger]',
})
export class AlertDanger { }

@Directive({
    selector: 'alert[close]',
})
export class AlertClose { }