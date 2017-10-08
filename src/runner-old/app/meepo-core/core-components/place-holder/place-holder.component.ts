import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'place-holder',
  templateUrl: './place-holder.component.html',
  styleUrls: ['./place-holder.component.scss']
})
export class PlaceHolderComponent implements OnInit {
  @Input() height: string = '35px';
  constructor() { }

  ngOnInit() {
  }

}
