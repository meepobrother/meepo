import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
    selector: 'iconfont-select',
    templateUrl: './iconfont-select.html',
    styleUrls: ['./iconfont-select.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => IconfontSelect),
            multi: true
        }
    ]
})
export class IconfontSelect implements OnInit, ControlValueAccessor {
    icons: any[] = [
        { icon: 'ui-icon ui-icon-add', active: false },
        { icon: 'ui-icon ui-icon-more', active: false },
        { icon: 'ui-icon ui-icon-arrow', active: false },
        { icon: 'ui-icon ui-icon-return', active: false },
        { icon: 'ui-icon ui-icon-checked', active: false },
        { icon: 'ui-icon ui-icon-checked-s', active: false },
        { icon: 'ui-icon ui-icon-info-block', active: false },
        { icon: 'ui-icon ui-icon-success-block', active: false },
        { icon: 'ui-icon ui-icon-warn-block', active: false },
        { icon: 'ui-icon ui-icon-info', active: false },
        { icon: 'ui-icon ui-icon-success', active: false },
        { icon: 'ui-icon ui-icon-warn', active: false },
        { icon: 'ui-icon ui-icon-next', active: false },
        { icon: 'ui-icon ui-icon-prev', active: false },
        { icon: 'ui-icon ui-icon-tag', active: false },
        { icon: 'ui-icon ui-icon-tag-pop', active: false },
        { icon: 'ui-icon ui-icon-tag-s', active: false },
        { icon: 'ui-icon ui-icon-warn-lg', active: false },
        { icon: 'ui-icon ui-icon-close', active: false },
        { icon: 'ui-icon ui-icon-close-progress', active: false },
        { icon: 'ui-icon ui-icon-close-page', active: false },
        { icon: 'ui-icon ui-icon-emo', active: false },
        { icon: 'ui-icon ui-icon-delete', active: false },
        { icon: 'ui-icon ui-icon-search', active: false },
        { icon: 'ui-icon ui-icon-order', active: false },
        { icon: 'ui-icon ui-icon-news', active: false },
        { icon: 'ui-icon ui-icon-personal', active: false },
        { icon: 'ui-icon ui-icon-dressup', active: false },
        { icon: 'ui-icon ui-icon-cart', active: false },
        { icon: 'ui-icon ui-icon-history', active: false },
        { icon: 'ui-icon ui-icon-wallet', active: false },
        { icon: 'ui-icon ui-icon-refresh', active: false },
        { icon: 'ui-icon ui-icon-thumb', active: false },
        { icon: 'ui-icon ui-icon-file', active: false },
        { icon: 'ui-icon ui-icon-hall', active: false },
        { icon: 'ui-icon ui-icon-voice', active: false },
        { icon: 'ui-icon ui-icon-unfold', active: false },
        { icon: 'ui-icon ui-icon-gototop', active: false },
        { icon: 'ui-icon ui-icon-share', active: false },
        { icon: 'ui-icon ui-icon-home', active: false },
        { icon: 'ui-icon ui-icon-pin', active: false },
        { icon: 'ui-icon ui-icon-star', active: false },
        { icon: 'ui-icon ui-icon-bugle', active: false },
        { icon: 'ui-icon ui-icon-trend', active: false },
        { icon: 'ui-icon ui-icon-unchecked', active: false },
        { icon: 'ui-icon ui-icon-unchecked-s', active: false },
        { icon: 'ui-icon ui-icon-play-active', active: false },
        { icon: 'ui-icon ui-icon-play', active: false },
        { icon: 'ui-icon ui-icon-stop-active', active: false },
        { icon: 'ui-icon ui-icon-stop', active: false },
        { icon: 'ui-icon ui-icon-set', active: false },
        { icon: 'ui-icon ui-icon-add-group', active: false },
        { icon: 'ui-icon ui-icon-add-people', active: false },
        { icon: 'ui-icon ui-icon-pc', active: false },
        { icon: 'ui-icon ui-icon-scan', active: false },
        { icon: 'ui-icon ui-icon-tag-svip', active: false },
        { icon: 'ui-icon ui-icon-tag-vip', active: false },
        { icon: 'ui-icon ui-icon-male', active: false },
        { icon: 'ui-icon ui-icon-female', active: false },
        { icon: 'ui-icon ui-icon-collect', active: false },
        { icon: 'ui-icon ui-icon-commented', active: false },
        { icon: 'ui-icon ui-icon-liked', active: false },
        { icon: 'ui-icon ui-icon-comment', active: false },
        { icon: 'ui-icon ui-icon-collected', active: false }
    ];
    onChangeFn: (_: any) => {};
    constructor() { }

    ngOnInit() { }

    onClick(item: any) {
        this.icons.map(res => {
            if (res.icon == item.icon) {

            } else {
                res.active = false;
            }
        })
        item.active = !item.active;
        this.onChangeFn(item.icon);
    }

    writeValue(obj: any): void {
        this.icons.map(res => {
            if (res.icon === obj) {
                res.active = true;
            }
        })
    }
    registerOnChange(fn: any): void {
        this.onChangeFn = fn;
    }
    registerOnTouched(): void {

    }
}