import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'sku',
  templateUrl: './sku.component.html',
  styleUrls: ['./sku.component.scss']
})
export class SkuComponent implements OnInit {
  @Input() good: any = {}
  @Output() onClose: EventEmitter<any> = new EventEmitter()
  @Output() onBuy: EventEmitter<any> = new EventEmitter()
  @Output() onAdd: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  _close(){
    this.onClose.emit('close');
  }

  _nowBuy(){
    this.onBuy.emit(this.good)
  }

  _addToCart(){
    this.onAdd.emit(this.good)
  }

  onChange(e: number){
    this.good['num'] = e;
  }

}
