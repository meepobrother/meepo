import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'cloud-page',
    templateUrl: './cloud-page.html',
    styleUrls: ['./cloud-page.scss']
})
export class CloudPage implements OnInit {
    componey: any = {};
    @Input() active: number = 0;
    constructor() { }
    ngOnInit() { }
    next() {
        if (this.active < 3) {
            this.active++;
        } else {
            this.active = 3;
        }
    }
    pre() {
        if (this.active > 0) {
            this.active --;
        } else {
            this.active = 0;
        }
    }
}
