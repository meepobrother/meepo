import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'setting-container-border',
    templateUrl: './setting-container-border.html',
    styleUrls: ['./setting-container-border.scss']
})
export class SettingContainerBorder implements OnInit, OnChanges {
    @Input() widget: any = {border: 'none'};;
    constructor() { }
    ngOnInit() { }
    ngOnChanges(changes: SimpleChanges){}
}
