import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'im-shoukuan',
  templateUrl: './im-shoukuan.component.html',
  styleUrls: ['./im-shoukuan.component.scss']
})
export class ImShoukuanComponent implements OnInit {
  @Output() onCancel: EventEmitter<any> = new EventEmitter()
  @Output() onSure: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  cancel(){
    this.onCancel.emit('cancel')
  }
  post: any = {
    type: 'shouqian',
    data: {
      money: '',
      desc: ''
    }
  }
  sure(){
    this.onSure.emit(this.post)
  }

}
