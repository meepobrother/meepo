import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'admin-root',
    templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {
    constructor() { }
    ngOnInit() { }

    onItem(e){
        console.log(e);
    }
}

