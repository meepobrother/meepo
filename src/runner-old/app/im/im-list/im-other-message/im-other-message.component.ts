import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'im-other-message',
  templateUrl: './im-other-message.component.html',
  styleUrls: ['./im-other-message.component.scss']
})
export class ImOtherMessageComponent implements OnInit {
  @Input() item: any = {}

  constructor() { }

  ngOnInit() {
  }

}
