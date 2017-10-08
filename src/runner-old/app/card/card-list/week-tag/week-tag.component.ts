import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'week-tag',
  templateUrl: './week-tag.component.html',
  styleUrls: ['./week-tag.component.scss']
})
export class WeekTagComponent implements OnInit {
  items: any[] = []
  @Output() onSelect: EventEmitter<any> = new EventEmitter()
  @Input() isMuti: boolean = true;
  @Input() week: string = '周一';

  constructor() {
    this.items = [
      {
        title: '周一',
        active: true
      },
      {
        title: '周二',
        active: true
      },
      {
        title: '周三',
        active: true
      },
      {
        title: '周四',
        active: true
      },
      {
        title: '周五',
        active: true
      },
      {
        title: '周六',
        active: true
      },
      {
        title: '周日',
        active: true
      }
    ]
  }

  ngOnInit() {
    if(!this.isMuti){
      this.items.map(res=>{
        res.active = false;
        if(this.week){
          if(res.title == this.week){
            res.active = true;
          }
        }
      })

    }
  }

  select(e: any){
    if(!this.isMuti){
      this.items.map(res=>{
        res.active = false;
      })
    }
    e.active = !e.active;
    if(!this.isMuti){
      this.onSelect.emit(e)
    }else{
      this.onSelect.emit(this.items)
    }
  }

}
