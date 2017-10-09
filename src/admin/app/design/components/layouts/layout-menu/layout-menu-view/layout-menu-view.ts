import {
    Component, OnInit, Input, OnChanges,
    SimpleChanges, HostListener, HostBinding
} from '@angular/core';
import { LayoutMenu } from '../layout-menu';
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
            }else{
                this._active = false;
            }
        });
    }

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('LayoutMenuView', changes);
    }
}