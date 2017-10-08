import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'zan-quantity',
  templateUrl: './van-quantity.component.html',
  styleUrls: ['./van-quantity.component.scss']
})
export class VanQuantityComponent implements OnInit {
  @Input() num: number = 1;
  @Input() min: number = 1;
  @Input() max: number = 20;

  @Output() onChange: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  add(){
    if(this.num < this.max){
      this.num ++;
      this.onChange.emit(this.num)
    }
  }

  del(){
    if(this.num > this.min){
      this.num --;
      this.onChange.emit(this.num)
    }
  }
}
