import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'suyun-repair-welcome',
  templateUrl: './repair-welcome.component.html',
  styleUrls: ['./repair-welcome.component.scss']
})
export class RepairWelcomeComponent implements OnInit {

  constructor(
    public router: Router
  ) {

  }

  ngOnInit() {

  }

  AddShop(){
    this.router.navigate(['/repair/shop-join'])
  }

}
