import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'opt-other',
  templateUrl: './opt-other.component.html',
  styleUrls: ['./opt-other.component.scss']
})
export class OptOtherComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  doAttend(){

  }

  doIndex(){
    this.router.navigate(['/runner/tasks/index'])
  }

  doHome(){
    this.router.navigate(['/runner/home/index'])
  }

}
