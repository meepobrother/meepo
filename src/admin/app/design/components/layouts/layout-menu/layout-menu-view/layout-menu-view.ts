import {
    Component, OnInit, Input, OnChanges,
    SimpleChanges, HostListener, HostBinding
} from '@angular/core';
import { LayoutMenu } from '../../../../classes';
import { LayoutService } from '../../layout.service';

@Component({
    selector: 'layout-menu-view',
    templateUrl: './layout-menu-view.html',
    styleUrls: ['./layout-menu-view.scss']
})
export class LayoutMenuView implements OnInit, OnChanges {
    @Input() widget: LayoutMenu = new LayoutMenu();
    @HostBinding('class.layout-menu') _menu: boolean = true;
    @HostBinding('class.active') _active: boolean = false;
    @HostBinding('class.left') _left: boolean = true;
    
    @HostBinding('class.layout-menu-close') _close: boolean = true;
    @HostBinding('class.layout-menu-open') _open: boolean = false;
    
    
    @HostListener('click', ['$event'])
    onClick(evt: any) {
        this.layout.onMenu(this.widget);
    }
    
    constructor(
        public layout: LayoutService
    ) { 
        this.layout.onChange.debounceTime(300).subscribe(res=>{
            if(res === this.widget){
                this._active = true;
                this._close = false;
            }else{
                this._active = false;
                this._close = true;
            }
        });
    }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {
    }
}