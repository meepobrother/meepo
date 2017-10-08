import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'show-fixed-top',
  templateUrl: './show-fixed-top.component.html',
  styleUrls: ['./show-fixed-top.component.scss']
})
export class ShowFixedTopComponent implements OnInit {
  closeIcon: string = window['module_url']+'assets/images/icon-close-banner.png'
  showfixedtop: boolean = true;

  @Input() logo: string = window['module_url']+'assets/images/icon.jpg';

  btnTitle: string = '立即关注';
  @Input() title: string = '关注有惊喜';
  @Input() desc: string = '跑腿代办,60分钟必达!';

  @Output() onItem: EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  onClose(){
    this.showfixedtop = false;
  }

  _onClick(){
    this.onItem.emit('on click')
  }

}
