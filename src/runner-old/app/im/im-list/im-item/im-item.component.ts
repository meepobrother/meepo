import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'im-item',
  templateUrl: './im-item.component.html',
  styleUrls: ['./im-item.component.scss']
})
export class ImItemComponent implements OnInit {
  @Input() items: any[] = []
  @Output() onItem: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
    // this.items.map((res,key)=>{
    //   res['display'] = key;
    // })
  }

  trackByFn(index,item){
    return item.display
  }

  _onClick(item: any){
    this.onItem.emit(item)
  }

}
