import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'suyun-bbs-list',
  templateUrl: './bbs-list.component.html',
  styleUrls: ['./bbs-list.component.scss']
})
export class BbsListComponent implements OnInit {
  @Input() items: any[] = []
  constructor() { }

  ngOnInit() {
  }

}
