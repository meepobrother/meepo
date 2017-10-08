import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'im-image',
  templateUrl: './im-image.component.html',
  styleUrls: ['./im-image.component.scss']
})
export class ImImageComponent implements OnInit {
  @Output() onCancel: EventEmitter<any> = new EventEmitter()
  @Output() onSure: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  post: any = {
    type: 'image',
    data: {
      images: [],
      total: 6
    }
  }
  onUpload(e: any){
    this.post.data.images = e;
  }

  cancel(){
    this.onCancel.emit('cancel')
  }

  sure(){
    this.onSure.emit(this.post)
  }

}
