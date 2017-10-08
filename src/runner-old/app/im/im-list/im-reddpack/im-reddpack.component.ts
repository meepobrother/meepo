import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'im-reddpack',
  templateUrl: './im-reddpack.component.html',
  styleUrls: ['./im-reddpack.component.scss']
})
export class ImReddpackComponent implements OnInit {
  @Output() onCancel: EventEmitter<any> = new EventEmitter()
  @Output() onSure: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  cancel(){
    this.onCancel.emit('cancel')
  }

  post: any = {
    type: 'redpack',
    data: {
      money: '',
      desc: ''
    }
  }
  sureRedpack(){
    this.onSure.emit(this.post)
  }

}
