import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'suyun-coach-day-tag',
  templateUrl: './coach-day-tag.component.html',
  styleUrls: ['./coach-day-tag.component.scss']
})
export class CoachDayTagComponent implements OnInit {
  @Input() items: any[] = [];
  @Output() onItem: EventEmitter<any> = new EventEmitter()
  constructor() {
    this.items = [
      {
        title: '今天',
        active: true
      },
      {
        title: '明天'
      },
      {
        title: '后天'
      }
    ]
  }

  ngOnInit() {
  }

  _onItem(item: any){
    this.items.map(res=>{
      res.active = false;
    })
    item.active = true;
    this.onItem.emit(item);
  }

}
