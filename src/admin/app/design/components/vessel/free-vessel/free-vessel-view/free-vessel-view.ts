import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'free-vessel-view',
    templateUrl: './free-vessel-view.html',
    styleUrls: ['./free-vessel-view.scss']
})
export class FreeVesselView implements OnInit {
    constructor() { }

    ngOnInit() { }
}


export class FreeVesselDefafult{
    children: any[] = [];
    type: string;
    name: string;

    constructor(){
        this.type = 'free-vessel';
        this.name = '自由面板';
    }
}