import {Component, EventEmitter, ChangeDetectorRef,Input, OnInit, Output,ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'suyun-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class TopNavComponent implements OnInit {
  _items: any[] = []
  @Input() 
  set items(val: any){
    if(val){
      this._items = val;
      this.cd.markForCheck();

      console.log(this._items)
    }
  }

  @Output() onItem: EventEmitter<any> = new EventEmitter()
  constructor(
    public cd: ChangeDetectorRef
  ) {
    this._items = []
  }

  ngOnInit(){

  }

  _onClick(item: any){
    this._items.map(res=>{
      res.active = false;
    })
    item.active = true;
    this.onItem.emit(item)
  }

}
