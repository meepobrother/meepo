import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'admin-root',
    templateUrl: './admin.component.html',
    styleUrls: ["./admin.component.scss"]
})
export class AdminComponent implements OnInit {
    constructor() { }
    ngOnInit() { }

    onItem(e){
        console.log(e);
    }
}

