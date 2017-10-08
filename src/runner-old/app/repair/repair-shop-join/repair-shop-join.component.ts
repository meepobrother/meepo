import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'suyun-repair-shop-join',
  templateUrl: './repair-shop-join.component.html',
  styleUrls: ['./repair-shop-join.component.scss']
})
export class RepairShopJoinComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  ok(){
    this.router.navigate(['/repair/post'])
  }

}
