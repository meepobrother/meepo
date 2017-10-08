import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'card-date',
  templateUrl: './card-date.component.html',
  styleUrls: ['./card-date.component.scss']
})
export class CardDateComponent implements OnInit {
  @Input() isForever: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
