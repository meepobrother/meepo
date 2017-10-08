import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'zan-modal',
  templateUrl: './zan-modal.component.html',
  styleUrls: ['./zan-modal.component.scss']
})
export class ZanModalComponent implements OnInit {
  @Output() onModal: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  _onModal(){
    this.onModal.emit('on')
  }
}
