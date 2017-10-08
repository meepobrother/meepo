import { Component, ViewChildren, QueryList } from '@angular/core';
import { OfficeIcon } from './office-icon';

@Component({
    selector: 'office-page',
    template: `
        <ng-content></ng-content>
    `,
    styleUrls: []
})
export class OfficePage{
    @ViewChildren(OfficeIcon) OfficeIcons: QueryList<OfficeIcon>;
    constructor(){
        console.log('welcome to use office page !');
    }

    ngOnInit(){
        // this.OfficeIcons.changes.subscribe(res=>{
        //     console.log(res);
        // })
        // console.log(this.OfficeIcons)
    }
}