import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'feed-tab',
  templateUrl: './feed-tab.component.html',
  styleUrls: ['./feed-tab.component.scss']
})
export class FeedTabComponent implements OnInit {
  @Input() items: any[] = [];
  @Output() onItem: EventEmitter<any> = new EventEmitter()
  constructor() {
    this.items = [
      {
        title: '推荐',
        active: true
      },
      {
        title: '段子',
        active: false
      }
    ]
  }

  ngOnInit() {
    console.log('feed tab inited;');
  }

  _onClick(item:any){
    this.items.map(res=>{
      res.active = false;
    })
    item.active = true;
    this.onItem.emit(item)
  }

}
