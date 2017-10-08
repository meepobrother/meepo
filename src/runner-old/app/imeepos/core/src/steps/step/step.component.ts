import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  @Input() status: string = 'wait';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';

  @Input() index: number = 0;
  @Input() len: number = 0;
  @Input() items: any[] = []
  @Input() current: number = 0;

  _props: any;
  @Input() props(val: any){
    this._props = val;
  }

  constructor() { }

  ngOnInit() {
    this.render()
  }

  render(){
    let className = this._props.className;
    if (this.index < this.len - 1 && this.items[this.index + 1].props.status === 'error') {
      className = className ? `${className} error-tail` : 'error-tail';
    }

    let icon = this._props.icon;
    if (!icon) {
      if (this.index < this.current) {
        // 对应 state: finish
        icon = 'check-circle-o';
      } else if (this.index > this.current) {
        // 对应 state: wait
        icon = 'ellipsis';
        className = className ? `${className} ellipsis-item` : 'ellipsis-item';
      }
      if (status === 'error' && this.index === this.current || this._props.status === 'error') {
        icon = 'cross-circle-o';
      }
    }
    icon = typeof icon === 'string' ? icon : icon;
    this.icon = icon;


  }

}
