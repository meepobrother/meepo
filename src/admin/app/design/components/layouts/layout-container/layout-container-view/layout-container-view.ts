import { Component, OnInit, Input, ContentChild, HostBinding, ElementRef } from '@angular/core';
import { LayoutContainerModel } from '../../../../classes';

import { LayoutBodyView } from '../../layout-body';
import { LayoutHeaderView } from '../../layout-header';
import { LayoutFooterView } from '../../layout-footer';
import { LayoutMenuView } from '../../layout-menu';

import { WIDGETS } from '../../../../classes/widgets';

@Component({
    selector: 'layout-container-view',
    templateUrl: './layout-container-view.html',
    styleUrls: ['./layout-container-view.scss']
})
export class LayoutContainerView implements OnInit {
    @Input() widget: LayoutContainerModel = new LayoutContainerModel();

    @ContentChild(LayoutBodyView) _body: LayoutBodyView;
    @ContentChild(LayoutHeaderView) _header: LayoutHeaderView;
    @ContentChild(LayoutFooterView) _footer: LayoutFooterView;
    @ContentChild(LayoutMenuView) _menu: LayoutMenuView;

    @HostBinding('class.layout-container') _container: boolean = true;

    constructor(
        public ele: ElementRef
    ) { }

    ngOnInit() {
        setTimeout(() => {
            console.log(this.widget);
        }, 300);
    }

    onDropBody(widget: any) {
        if (widget.data) {
            console.log('放在body里', widget);
            if(widget.tag == 'widget-new'){
                widget.data = new WIDGETS[widget.data.type]();
            }
            // 删除原来的
            let old = this.widget.body.children.indexOf(widget.data);

            this.widget.body.children.push(widget.data);
            if (old >= 0) {
                this.widget.body.children.splice(old, 1);
            }
            console.log('原来的ID' + old, this.widget.body.children);
        }
    }
}
