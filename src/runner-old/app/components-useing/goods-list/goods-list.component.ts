import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.scss']
})
export class GoodsListComponent implements OnInit {
  @Input() items: any[] = []
  @Output() onAdd: EventEmitter<any> = new EventEmitter()
  _tag: string = '';
  @Input()
  set tag(val: string){
    this._tag = val;
    this.getGoodsByTag(0)
  }
  constructor(
    // public shopgoods:
  ) {
    this.items = [
      {
        title: '辣条',
        price: 2.50,
        image: './assets/images/shop/01.jpg',
        total: 200,
        limit: 20
      },
      {
        title: '香烟',
        price: 2.50,
        image: './assets/images/shop/yan.jpg',
        total: 200,
        limit: 20
      }
    ]
  }

  ngOnInit() {

  }

  getGoodsByTag(start: number){
    // this.shopgoods.search({tag: this._tag,start: start,len: 21}).subscribe(res=>{
    //   this.items = res.info;
    // })
  }

  addToCart(e: any){
    this.onAdd.emit(e);
  }

}
