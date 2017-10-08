import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'suyun-save-image',
  templateUrl: './save-image.component.html',
  styleUrls: ['./save-image.component.scss']
})
export class SaveImageComponent implements OnInit {
  @Input() image: string = '';
  @Input() title: string = '保存收货凭证';

  @Output() onClose: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  close(){
    this.onClose.emit('close');
  }

}
