import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick',
  template: `
    <router-outlet></router-outlet>
  `
})
export class QuickComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
