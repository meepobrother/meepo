import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'frozen-newstips',
  templateUrl: './frozen-newstips.component.html',
  styleUrls: ['./frozen-newstips.component.scss']
})
export class FrozenNewstipsComponent implements OnInit {
  @Input() content: string = '收到一条未读消息';
  @Output() onInit: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
    this.onInit.emit(this)
  }

}
