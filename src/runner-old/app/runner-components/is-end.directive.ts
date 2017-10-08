import {Directive, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[meepoIsEnd]'
})
export class IsEndDirective implements OnInit{
  ngOnInit(): void {
    if(this.isLast){
      this.onEnd.emit('end');
    }
  }

  @Output() onEnd: EventEmitter<any> = new EventEmitter()
  @Input() isLast: boolean;
  constructor() { }

}
