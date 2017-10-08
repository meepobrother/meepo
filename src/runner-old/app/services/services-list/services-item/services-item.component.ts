import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'suyun-services-item',
  templateUrl: './services-item.component.html',
  styleUrls: ['./services-item.component.scss']
})
export class ServicesItemComponent implements OnInit {
  @Input() detail: any = {}

  @Output() onItem: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }


  _onItem(){
    this.onItem.emit(this.detail);
  }
}
