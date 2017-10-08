import { Component, ElementRef, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { ApplicationService } from '../services';

@Component({
  selector: 'iphone6',
  templateUrl: './iphone6.component.html',
  styleUrls: ['./iphone6.component.scss']
})
export class Iphone6Component implements OnInit {
  _background: string = 'black';
  _open: boolean = false;
  constructor(
    public app: ApplicationService
  ) { 
    this.app.openStream.subscribe(res=>{
      this.applyChange(res);
    });
  }

  ngOnInit() { }


  applyChange(res: boolean){
    this._open = res;
    if (this._open) {
      this._background = 'white';
    } else {
      this._background = 'black';
    }
  }

  open() {
    this._open = !this._open;
    if (this._open) {
      this._background = 'white';
    } else {
      this._background = 'black';
    }
  }
}

