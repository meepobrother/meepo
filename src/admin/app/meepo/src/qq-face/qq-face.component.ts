import {
  Component, ElementRef, EventEmitter,
  OnInit, Output, ViewChild,
  ViewEncapsulation, HostListener,
} from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

declare const require;
let jquery = require('jquery');

@Component({
  selector: 'qq-face',
  templateUrl: './qq-face.component.html',
  styleUrls: ['./qq-face.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QqFaceComponent implements OnInit {

  items: any[];

  @ViewChild('content') contentHtml: ElementRef;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  content: string = '';
  innerHTML: any = this.domSanitizer.bypassSecurityTrustHtml(this.content);

  max: number = 135;

  lis: any[] = [];
  colMax: number = 15;
  rowMax: number = 7;

  uls: any[] = [];
  ulMax: number = 5;

  constructor(
    private domSanitizer: DomSanitizer
  ) {
    this.items = [];
    for (let i = 0; i < this.rowMax * this.colMax; i++) {
      this.lis.push(i)
    }
    for (let i = 1; i <= this.ulMax; i++) {
      this.uls.push(i)
    }
  }

  ngOnInit() { }

  _onClick(i, j) {
    let col = (j % 15) * 26;
    let row = Math.floor(j / 15) * 26;
    let content = `<span class="qzfl_emotion_page_${i + 1}" style="vertical-align: middle;background-position:-${col}px -${row}px;width:26px;height:26px;display: inline-block;"></span>`;
    this.onClick.emit(content)
  }

}
