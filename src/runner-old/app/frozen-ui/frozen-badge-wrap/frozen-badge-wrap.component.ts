import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'frozen-badge-wrap',
  templateUrl: './frozen-badge-wrap.component.html',
  styleUrls: ['./frozen-badge-wrap.component.scss']
})
export class FrozenBadgeWrapComponent implements OnInit {
  @Input() tag: string = '标签';
  constructor() { }

  ngOnInit() {
  }

}
