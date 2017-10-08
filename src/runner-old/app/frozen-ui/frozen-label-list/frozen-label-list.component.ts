import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'frozen-label-list',
  templateUrl: './frozen-label-list.component.html',
  styleUrls: ['./frozen-label-list.component.scss']
})
export class FrozenLabelListComponent implements OnInit {
  @Input() items: any[] = []
  @Output() onItem: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  _onItem(e: any){
    this.onItem.emit(e)
  }

}
