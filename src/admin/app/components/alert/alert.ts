import { Directive, Component, ContentChild, Input, HostBinding } from '@angular/core';
import { isTrueProperty } from '../util';
@Component({
    selector: 'alert',
    template: `
        <ng-container *ngIf="_open">
            <button *ngIf="_close" class="close" (click)="onClose()" type="button">×</button>
            <ng-content></ng-content>
        </ng-container>
    `,
    styles: [
        `:host{
            display:block;
        }`
    ]
})
export class Alert {
    @HostBinding('class.alert') _alert: boolean = true;
    @HostBinding('class.alert-dismissable') _close: boolean = false;
    
    _open: boolean = true;
    @Input()
    set close(val: boolean) {
        console.log(val);
        this._close = isTrueProperty(val);
    }
    onClose() {
        this._open = false;
        this._alert = false;
    }
}

@Directive({
    selector: 'alert[success]',
})
export class AlertSuccess { 
    @HostBinding('class.alert-success') _alert: boolean = true;
}

@Directive({
    selector: 'alert[info]',
})
export class AlertInfo { 
    @HostBinding('class.alert-info') _alert: boolean = true;
}

@Directive({
    selector: 'alert[warning]',
})
export class AlertWarning { 
    @HostBinding('class.alert-warning') _alert: boolean = true;
}

@Directive({
    selector: 'alert[danger]',
})
export class AlertDanger { 
    @HostBinding('class.alert-danger') _alert: boolean = true;
}
