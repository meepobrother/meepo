import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() items: any[] = [];
  @Output() onItem: EventEmitter<any> = new EventEmitter()

  constructor() {
    this.items = [
      {
        title: '热门推荐',
        active: true
      },
      {
        title: '测试'
      },
      {
        title: '测试'
      }
    ]
  }

  _onItem(item){
    this.items.map(res=>{
      res['active'] = false;
    })
    item.active = true;
    this.onItem.emit(item)
  }

  ngOnInit() {

  }

}
