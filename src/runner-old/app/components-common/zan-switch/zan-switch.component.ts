import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'zan-switch',
  templateUrl: './zan-switch.component.html',
  styleUrls: ['./zan-switch.component.scss']
})
export class ZanSwitchComponent implements OnInit {
  @Input() item: any = {
    active: false
  }
  @Output() onSwitch: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
    this.item['active'] = this.item['active'] ? true : false;
  }

  switch(){
    this.item.active = !this.item.active
    this.onSwitch.emit(this.item)
  }

}
