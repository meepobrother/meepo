import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'zan-icon',
  templateUrl: './zan-icon.component.html',
  styleUrls: ['./zan-icon.component.scss']
})
export class ZanIconComponent implements OnInit {
  @Input() name: string = 'checked';
  @Input() color: string = '#06bf04';
  @Input() size: string = '22px';
  constructor() { }

  ngOnInit() {
  }

}
