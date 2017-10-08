import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'im-location',
  templateUrl: './im-location.component.html',
  styleUrls: ['./im-location.component.scss']
})
export class ImLocationComponent implements OnInit {
  @Output() onCancel: EventEmitter<any> = new EventEmitter()
  @Output() onSure: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  location: any = {}
  onPicker(e: any){
    this.location = e;
  }
  cancel(){
    this.onCancel.emit('cancel')
  }

  sure(){
    this.onSure.emit({type: 'location',data: this.location})
  }
}
