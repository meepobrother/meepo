import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UuItemBoxDefault } from '../../../../classes';

@Component({
    selector: 'uu-item-box-view',
    templateUrl: './uu-item-box-view.html',
    styleUrls: ['./uu-item-box-view.scss']
})
export class UuItemBoxView implements OnInit, OnChanges {
    @Input() widget: UuItemBoxDefault = new UuItemBoxDefault();
    
    constructor() { }

    ngOnInit() { }

    ngOnChanges(){
        setTimeout(()=>{
            console.log('uu item box view change');
        },0);
    }

}