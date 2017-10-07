import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'iphone6',
  templateUrl: './iphone6.component.html',
  styleUrls: ['./iphone6.component.scss']
})
export class Iphone6Component implements OnInit {
  _background: string = 'black';
  _open: boolean = false;
  constructor() { }

  ngOnInit() { }

  open() {
    this._open = !this._open;
    if (this._open) {
      this._background = 'white';
    } else {
      this._background = 'black';
    }
  }
}

