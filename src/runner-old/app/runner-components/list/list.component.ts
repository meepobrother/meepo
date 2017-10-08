import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'suyun-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() items: any[] = []
  @Output() onItem: EventEmitter<any> = new EventEmitter()

  constructor() {

  }

  ngOnInit() {

  }

  _onClick(item: any){
    if(item.isphone){
      location.href = 'tel:'+item.mobile;
    }else{
      this.onItem.emit(item);
    }
  }

}
