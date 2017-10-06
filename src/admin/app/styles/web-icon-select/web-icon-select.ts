import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'web-icon-select',
    templateUrl: './web-icon-select.html',
    styleUrls: ["./web-icon-select.scss"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => WebIconSelect),
            multi: true
        }
    ]
})
export class WebIconSelect implements OnInit, ControlValueAccessor {
    icons: any[] = [
        { icon: 'wb-dashboard', active: false },
        { icon: 'wb-inbox', active: false },
        { icon: 'wb-cloud', active: false },
        { icon: 'wb-bell', active: false },
        { icon: 'wb-book', active: false },
        { icon: 'wb-bookmark', active: false },
        { icon: 'wb-tag', active: false },
        { icon: 'wb-library', active: false },
        { icon: 'wb-share', active: false },
        { icon: 'wb-reply', active: false },
        { icon: 'wb-refresh', active: false },
        { icon: 'wb-move', active: false },
        { icon: 'wb-chat', active: false },
        { icon: 'wb-chat-working', active: false },
        { icon: 'wb-chat-text', active: false },
        { icon: 'wb-chat-group', active: false },
        { icon: 'wb-envelope', active: false },
        { icon: 'wb-envelope-open', active: false },
        { icon: 'wb-user', active: false },
        { icon: 'wb-user-circle', active: false },
        { icon: 'wb-users', active: false },
        { icon: 'wb-user-add', active: false },
        { icon: 'wb-grid-9', active: false },
        { icon: 'wb-grid-4', active: false },
        { icon: 'wb-menu', active: false },
        { icon: 'wb-layout', active: false },
        { icon: 'wb-fullscreen', active: false },
        { icon: 'wb-fullscreen-exit', active: false },
        { icon: 'wb-expand', active: false },
        { icon: 'wb-contract', active: false },
        { icon: 'wb-arrow-expand', active: false },
        { icon: 'wb-arrow-shrink', active: false },
        { icon: 'wb-desktop', active: false },
        { icon: 'wb-mobile', active: false },
        { icon: 'wb-signal', active: false },
        { icon: 'wb-power', active: false },
        { icon: 'wb-more-horizontal', active: false },
        { icon: 'wb-more-vertical', active: false },
        { icon: 'wb-globe', active: false },
        { icon: 'wb-map', active: false },
        { icon: 'wb-flag', active: false },
        { icon: 'wb-pie-chart', active: false },
        { icon: 'wb-stats-bars', active: false },
        { icon: 'wb-pluse', active: false },
        { icon: 'wb-home', active: false },
        { icon: 'wb-shopping-cart', active: false },
        { icon: 'wb-payment', active: false },
        { icon: 'wb-briefcase', active: false },
        { icon: 'wb-search', active: false },
        { icon: 'wb-zoom-in', active: false },
        { icon: 'wb-zoom-out', active: false },
        { icon: 'wb-download', active: false },
        { icon: 'wb-upload', active: false },
        { icon: 'wb-sort-asc', active: false },
        { icon: 'wb-sort-des', active: false },
        { icon: 'wb-graph-up', active: false },
        { icon: 'wb-graph-down', active: false },
        { icon: 'wb-replay', active: false },
        { icon: 'wb-edit', active: false },

        { icon: 'wb-pencil', active: false },
        { icon: 'wb-rubber', active: false },
        { icon: 'wb-crop', active: false },
        { icon: 'wb-eye', active: false },
        { icon: 'wb-eye-close', active: false },
        { icon: 'wb-image', active: false },
        { icon: 'wb-gallery', active: false },

        { icon: 'wb-video', active: false },
        { icon: 'wb-camera', active: false },
        { icon: 'wb-folder', active: false },
        { icon: 'wb-clipboard', active: false },
        { icon: 'wb-order', active: false },
        { icon: 'wb-file', active: false },

        { icon: 'wb-copy', active: false },
        { icon: 'wb-add-file', active: false },
        { icon: 'wb-print', active: false },
        { icon: 'wb-calendar', active: false },
        { icon: 'wb-time', active: false },
        { icon: 'wb-trash', active: false },
        { icon: 'wb-plugin', active: false },
        { icon: 'wb-extension', active: false },
        { icon: 'wb-memory', active: false },
        { icon: 'wb-settings', active: false },
        { icon: 'wb-scissor', active: false },
        { icon: 'wb-wrench', active: false },
        { icon: 'wb-hammer', active: false },
        { icon: 'wb-lock', active: false },
        { icon: 'wb-unlock', active: false },
        { icon: 'wb-volume-low', active: false },
        { icon: 'wb-volume-high', active: false },
        { icon: 'wb-volume-off', active: false },
        { icon: 'wb-pause', active: false },
        { icon: 'wb-play', active: false },
        { icon: 'wb-stop', active: false },
        { icon: 'wb-musical', active: false },
        { icon: 'wb-random', active: false },
        { icon: 'wb-reload', active: false },
        { icon: 'wb-loop', active: false },

        { icon: 'wb-text', active: false },
        { icon: 'wb-bold', active: false },
        { icon: 'wb-italic', active: false },
        { icon: 'wb-underline', active: false },
        { icon: 'wb-format-clear', active: false },
        { icon: 'wb-text-type', active: false },
        { icon: 'wb-table', active: false },

        { icon: 'wb-attach-file', active: false },
        { icon: 'wb-paperclip', active: false },
        { icon: 'wb-link-intact', active: false },
        { icon: 'wb-link', active: false },
        { icon: 'wb-link-broken', active: false },
        { icon: 'wb-indent-increase', active: false },
        { icon: 'wb-indent-decrease', active: false },
        { icon: 'wb-align-justify', active: false },
        { icon: 'wb-align-left', active: false },

        { icon: 'wb-align-center', active: false },
        { icon: 'wb-align-right', active: false },
        { icon: 'wb-list-numbered', active: false },
        { icon: 'wb-list-bulleted', active: false },
        { icon: 'wb-list', active: false },
        { icon: 'wb-emoticon', active: false },
        { icon: 'wb-quote-right', active: false },

        { icon: 'wb-code', active: false },
        { icon: 'wb-code-working', active: false },
        { icon: 'wb-code-unfold', active: false },
        { icon: 'wb-chevron-right', active: false },
        { icon: 'wb-chevron-left', active: false },
        { icon: 'wb-chevron-left-mini', active: false },
        { icon: 'wb-chevron-right-mini', active: false },
        
        { icon: 'wb-chevron-up', active: false },
        { icon: 'wb-chevron-down', active: false },
        { icon: 'wb-chevron-up-mini', active: false },
        { icon: 'wb-chevron-down-mini', active: false },
        { icon: 'wb-arrow-left', active: false },
        { icon: 'wb-arrow-right', active: false },
        { icon: 'wb-arrow-up', active: false },
        { icon: 'wb-arrow-down', active: false },

        { icon: 'wb-dropdown', active: false },
        { icon: 'wb-dropup', active: false },
        { icon: 'wb-dropright', active: false },
        { icon: 'wb-dropleft', active: false },
        { icon: 'wb-sort-vertical', active: false },
        { icon: 'wb-triangle-left', active: false },
        { icon: 'wb-triangle-right', active: false },

        { icon: 'wb-triangle-down', active: false },
        { icon: 'wb-triangle-up', active: false },
        { icon: 'wb-check-circle', active: false },
        { icon: 'wb-check', active: false },
        { icon: 'wb-check-mini', active: false },
        { icon: 'wb-close', active: false },
        { icon: 'wb-close-mini', active: false },
        { icon: 'wb-plus-circle', active: false },
        { icon: 'wb-plus', active: false },
        { icon: 'wb-minus-circle', active: false },
        { icon: 'wb-minus', active: false },
        { icon: 'wb-alert-circle', active: false },
        
        { icon: 'wb-alert', active: false },
        { icon: 'wb-help-circle', active: false },
        { icon: 'wb-help', active: false },
        { icon: 'wb-info-circle', active: false },
        { icon: 'wb-info', active: false },
        { icon: 'wb-warning', active: false },
        { icon: 'wb-heart', active: false },
        { icon: 'wb-heart-outline', active: false },
        { icon: 'wb-star', active: false },
        { icon: 'wb-star-half', active: false },
        
        { icon: 'wb-star-outline', active: false },
        { icon: 'wb-thumb-up', active: false },
        { icon: 'wb-thumb-down', active: false },
        { icon: 'wb-small-point', active: false },
        { icon: 'wb-medium-point', active: false },
        { icon: 'wb-large-point', active: false }
        
    ];
    icon: any;
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

