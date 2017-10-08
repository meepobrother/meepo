import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  template: `
    <router-outlet></router-outlet>
  `
})
export class PreviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
