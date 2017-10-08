import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'runner-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  _items: any[] = [];
  @Input()
  set items(val: any){
    this._items = val;
    this.soft();
  }
  navs: any[] = [];
  constructor(
      public router: Router
  ) {
    this.items = []
  }

  ngOnInit() {

  }

  soft(){
    let Totallen = this._items.length;
    let total = 0;

    let navs: any = [];
    let nav: any = []
    this._items.map(res=>{
      let len = nav.length;
      total ++;
      nav.push(res)
      if((len>0 && len % 9 == 0 ) || total == Totallen){
        navs.push(nav)
        nav = []
      }
    })
    this.navs = navs;
  }

  onClick(item: any){
    this.router.navigate(item.link)
  }

}
