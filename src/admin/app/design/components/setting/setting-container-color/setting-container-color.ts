import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'setting-container-color',
    templateUrl: './setting-container-color.html',
    styleUrls: ['./setting-container-color.scss']
})
export class SettingContainerColor implements OnInit, OnChanges {
    @Input() widget: any = {border: 'none'};;
    constructor() { }
    ngOnInit() { }
    ngOnChanges(changes: SimpleChanges){}
}

