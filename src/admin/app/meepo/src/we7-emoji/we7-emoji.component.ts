import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'we7-emoji',
  templateUrl: './we7-emoji.component.html',
  styleUrls: ['./we7-emoji.component.css']
})
export class We7EmojiComponent implements OnInit {
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  lis: any[] = [];
  colMax: number = 15; // 7 * 15 = 105
  rowMax: number = 7;
  uls: any[] = [];
  ulMax: number = 5; //行
  max: number = 841 * 20;

  constructor() {
    for (let i = 0; i < this.rowMax * this.colMax; i++) {
      this.lis.push(i);
    }
    for (let i = 1; i <= this.ulMax; i++) {
      this.uls.push(i);
    }
  }

  ngOnInit() { }

  getWidth(i, j) {
    //第i行 一行有15个 0行0+i 1行105+i
    //第j列
    // 2080 / 20 = 104
    let row = (i * 105 + j) * 20;
    if (row > this.max) {
      return row;
    }
    return row;
  }

  _onClick(e) {
    this.onClick.emit(e.srcElement);
  }

}
