import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'setting-container-padding',
    templateUrl: './setting-container-padding.html',
    styleUrls: ['./setting-container-padding.scss']
})
export class SettingContainerPadding implements OnInit {
    @Input() widget: any = {border: 'none'};
    constructor() { }

    ngOnInit() { }
}

