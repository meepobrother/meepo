import {Directive, Input} from '@angular/core';
let nextUniqueId = 0;
@Directive({
  selector: 'meepo-error'
})
export class MeepoError {
  @Input() id: string = `meepo-error-${nextUniqueId++}`;
}
