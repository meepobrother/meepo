import { Component, OnInit, Input } from '@angular/core';
import { Navbar } from '../navbar';
@Component({
    selector: 'navbar-setting',
    templateUrl: './navbar-setting.html',
    styleUrls: ['./navbar-setting.scss']
})
export class NavbarSetting implements OnInit {
    @Input() widget: Navbar = new Navbar();
    constructor() { }

    ngOnInit() { }

    addItem(){
        this.widget.content.push({
            title: '测试'
        });
    }

    delete(index: number){
        this.widget.content.splice(index,1)
    }
}