import {Component, EventEmitter, Input, OnInit, Output,ElementRef,ViewChild} from '@angular/core';

@Component({
  selector: 'pay-record',
  templateUrl: './pay-record.component.html',
  styleUrls: ['./pay-record.component.scss']
})
export class PayRecordComponent implements OnInit {
  @Input() items: any[] = [
    {
      title:'进行中',
      active: true
    },
    {
      title: '已完成',
      active: false
    }
  ]

  @Input() paylogs: any[] = []

  @Input() type: string = 'avatar';
  @Input() paddingTop: string = '0';

  @Output() onItem: EventEmitter<any> = new EventEmitter()
  @Output() onMore: EventEmitter<any> = new EventEmitter()
  @Output() onInit: EventEmitter<any> = new EventEmitter()

  @ViewChild('list') list: ElementRef

  constructor() { }

  ngOnInit() {
    this.onInit.emit(this.list);
  }

  onTab(item: any){
    this.items.map(res=>{
      res.active = false;
    })
    item.active = true;
    this.onItem.emit(item)
  }

  _onMore(item: any,index: number){
    this.onMore.emit({item: item,index: index})
  }
}
