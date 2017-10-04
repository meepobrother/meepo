import {Directive, Input} from '@angular/core';
let nextUniqueId = 0;
@Directive({
  selector: 'meepo-hint'
})
export class MeepoHint {
  @Input() align: 'start' | 'end' = 'start';
  @Input() id: string = `meepo-hint-${nextUniqueId++}`;
}
