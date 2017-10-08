import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { isTrueProperty, isPresent } from 'ionic-angular/util/util';

/**
 * 独立的 icon
 */

@Component({
    selector: 'office-icon',
    styleUrls: [
        './scss/components/icon.scss'
    ],
    template: `
        <i [ngClass]="classObj" aria-hidden="true"></i>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfficeIcon{
    _icon: string = '';
    classObj: any = {};
    @Input()
    set name(val: string){
        val = this.firstUpperCase(val);
        this._icon = val;
        this.classObj = this.createIcon();
    }

    _size: string = 'l'; // xs s m l
    @Input()
    set size(val: string){
        this._size = val;
    }

    _circle: boolean = false;
    @Input()
    set circle(val: any){
        if(isPresent(val)){
            this._circle = isTrueProperty(val);
        }else{
            this._circle = true;
        }
    }

    createIcon(){
        return {
            [`ms-Icon`]: true,
            [`ms-Icon--${this._icon}`]: true,
            [`ms-Icon--${this._size}`]: true,
            [`ms-Icon--circle`]: this._circle
        }
    }

    firstUpperCase(str) {
        return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
    }
}