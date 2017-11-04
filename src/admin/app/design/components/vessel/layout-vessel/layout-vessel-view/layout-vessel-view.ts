import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'layout-vessel-view',
    templateUrl: './layout-vessel-view.html',
    styleUrls: ['./layout-vessel-view.scss']
})
export class LayoutVesselView implements OnInit {
    constructor() { }

    ngOnInit() { }
}

export class LayoutVesselDefault{
    leftChildren: any[] = [];
    rightChildren: any[] = [];
    

    type: string;
    name: string;
    leftContainerStyle: any;
    rightContainerStyle: any;
    constructor(){
        this.type = 'layout-vessel';
        this.name='双栏';
        this.leftContainerStyle = {
            width: '50%'
        }
        this.rightContainerStyle = {
            width: 'auto'
        }
    }
}