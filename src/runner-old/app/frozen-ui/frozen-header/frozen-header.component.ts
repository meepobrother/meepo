import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'frozen-header',
  templateUrl: './frozen-header.component.html',
  styleUrls: ['./frozen-header.component.scss']
})
export class FrozenHeaderComponent implements OnInit {
  @Input() title:string = '同城服务';
  @Output() onMore: EventEmitter<any> = new EventEmitter()
  constructor(
      public location: Location
  ) {

  }

  ngOnInit() {

  }

  back(){
    this.location.back()
  }

  more(){
    this.onMore.emit('')
  }

}
