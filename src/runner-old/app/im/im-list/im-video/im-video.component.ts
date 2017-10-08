import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'im-video',
  templateUrl: './im-video.component.html',
  styleUrls: ['./im-video.component.scss']
})
export class ImVideoComponent implements OnInit {
  @Output() onCancel: EventEmitter<any> = new EventEmitter()
  @Output() onSure: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  post: any = {
    type: 'video',
    data: {
      url: ''
    }
  }

  cancel(){
    this.onCancel.emit('cancel')
  }

  sureRedpack(){
    this.onSure.emit(this.post)
  }
}
