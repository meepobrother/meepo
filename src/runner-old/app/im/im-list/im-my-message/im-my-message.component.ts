import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'im-my-message',
  templateUrl: './im-my-message.component.html',
  styleUrls: ['./im-my-message.component.scss']
})
export class ImMyMessageComponent implements OnInit {
  @Input() item: any = {}
  constructor() { }

  ngOnInit() {
  }

}
