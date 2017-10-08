import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shop-tag',
  templateUrl: './shop-tag.component.html',
  styleUrls: ['./shop-tag.component.scss']
})
export class ShopTagComponent implements OnInit {
  @Input() items: any[] = []
  constructor() {
    this.items = []
  }

  ngOnInit() {

  }

  add(){
    let item = {
      title: '免费wifi'
    }
    this.items.push(item)
  }
  activeItem: any = {}
  activeIndex: number = 0;
  showEdit: boolean = false;
  edit(e: any,index: number){
    this.activeItem = e;
    this.activeIndex = index
    this.showEdit = true;
  }

  cancel(){
    this.showEdit = false;
  }
  del(){
    this.items.splice(this.activeIndex,1)
  }
  save(){
    this.items[this.activeIndex] = this.activeItem
    this.showEdit = false
  }

}
