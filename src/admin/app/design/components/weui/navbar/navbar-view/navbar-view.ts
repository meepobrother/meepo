import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Navbar } from '../navbar';
@Component({
    selector: 'navbar-view',
    templateUrl: './navbar-view.html',
    styleUrls: ['./navbar-view.scss']
})
export class NavbarView implements OnInit {
    @Input() widget: Navbar = new Navbar();
    @HostBinding('class.weui-tab') _tab: boolean = true; 
    constructor() { }

    ngOnInit() { }

    onCLick(item: any){
        this.widget.content.map(res=>{
            res.active = false;
        });
        item.active = true;
    }
}
