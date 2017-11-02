import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'setting-container-margin',
    templateUrl: './setting-container-margin.html',
    styleUrls: ['./setting-container-margin.scss']
})
export class SettingContainerMargin implements OnInit, OnChanges {
    @Input() widget: any = {border: 'none'};;
    constructor() { }

    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges){}
}

