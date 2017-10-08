import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'frozen-loading',
  templateUrl: './frozen-loading.component.html',
  styleUrls: ['./frozen-loading.component.scss']
})
export class FrozenLoadingComponent implements OnInit {
  @Input() content: string = '加载中...';
  @Output() onInit: EventEmitter<any> = new EventEmitter()
  showLoading: boolean = false;
  @Input() isBlock: boolean = true;
  constructor() { }

  ngOnInit() {
    this.onInit.emit(this)
  }

  setBlock(val: boolean){
    this.isBlock = val;
  }

  show(content: string){
    this.content = content;
    this.showLoading = true;
  }

  hide(){
    this.showLoading = false;
  }

}
