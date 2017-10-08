import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'suyun-rout-map',
  templateUrl: './rout-map.component.html',
  styleUrls: ['./rout-map.component.scss']
})
export class RoutMapComponent implements OnInit {
  routerUrl: any;
  constructor(
    public route: ActivatedRoute,
    public dom: DomSanitizer
  ) {
    this.route.params.subscribe(res=>{
      this.routerUrl = res.url;
      this.routerUrl = this.dom.bypassSecurityTrustResourceUrl(this.routerUrl)
    })
  }

  ngOnInit() {

  }

}
