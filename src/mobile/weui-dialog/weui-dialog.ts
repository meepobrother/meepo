import {
    TemplateRef,
    Input,
    Component,
    OnInit,
    HostBinding,
    ContentChild,
    ViewEncapsulation,
    ChangeDetectionStrategy,
    AfterContentInit,
    ViewChild,
    OnChanges,
    SimpleChanges,
    ChangeDetectorRef
} from '@angular/core';


export function isTrueProperty(val: any): boolean {
    if (typeof val === 'string') {
        val = val.toLowerCase().trim();
        return (val === 'true' || val === 'on' || val === '');
    }
    return !!val;
}

import { DialogBdPlaceholder, DialogHdPlaceholder, DialogFtPlaceholder } from './weui-dialog-placeholder';
import { DialogBodyDef, DialogFooterDef, DialogHeaderDef } from './weui-dialog-def';

@Component({
    selector: 'weui-dialog',
    templateUrl: 'weui-dialog.html',
    styleUrls: ['weui-dialog.css'],
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'weuiDialog'
})
export class WeuiDialog implements OnInit, AfterContentInit {
    private _definitionsByName = new Map<string, any>();

    @Input()
    set android(val: any) {
        this._android = isTrueProperty(val);
    }

    @HostBinding('class.weui-dialog') _dialog: boolean = true;
    @HostBinding('class.weui-skin_android') _android: boolean = this.android;

    @ContentChild(DialogBodyDef) dialogBodyDef: DialogBodyDef;
    @ContentChild(DialogFooterDef) dialogFooterDef: DialogFooterDef;
    @ContentChild(DialogHeaderDef) dialogHeaderDef: DialogHeaderDef;

    @ViewChild(DialogBdPlaceholder) bdPlaceholder: DialogBdPlaceholder;
    @ViewChild(DialogHdPlaceholder) hdPlaceholder: DialogHdPlaceholder;
    @ViewChild(DialogFtPlaceholder) ftPlaceholder: DialogFtPlaceholder;

    constructor(
        private readonly _changeDetectorRef: ChangeDetectorRef
    ) { }

    ngOnInit() { }

    ngAfterContentInit() {
        this.renderBody();
        this.renderFooter();
        this.renderHeader();
    }

    renderBody() {
        if (this.dialogBodyDef) {
            this.bdPlaceholder.viewContainer.clear();
            this.bdPlaceholder.viewContainer.createEmbeddedView(this.dialogBodyDef.templateRef);
            this._changeDetectorRef.markForCheck();
        }
    }

    renderHeader() {
        if (this.dialogHeaderDef) {
            this.hdPlaceholder.viewContainer.clear();
            this.hdPlaceholder.viewContainer.createEmbeddedView(this.dialogHeaderDef.templateRef);
            this._changeDetectorRef.markForCheck();
        }
    }

    renderFooter() {
        if (this.dialogFooterDef) {
            this.ftPlaceholder.viewContainer.clear();
            this.ftPlaceholder.viewContainer.createEmbeddedView(this.dialogFooterDef.templateRef);
            this._changeDetectorRef.markForCheck();
        }
    }


}
