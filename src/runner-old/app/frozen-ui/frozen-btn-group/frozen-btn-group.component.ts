import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'frozen-btn-group',
  templateUrl: './frozen-btn-group.component.html',
  styleUrls: ['./frozen-btn-group.component.scss']
})
export class FrozenBtnGroupComponent implements OnInit {
  @Input() items: any[] = []
  onItem: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  _onItem(e: any){
    this.onItem.emit(e)
  }

}
