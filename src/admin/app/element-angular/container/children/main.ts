import { Component, ElementRef, Input, OnInit } from '@angular/core'
import { main } from '../style'
import { removeNgTag } from '../../shared/utils/host'

@Component({
  selector: 'el-main',
  styles: [main],
  template: `
    <main [class]="'el-main ' + class">
      <ng-content></ng-content>
    </main>
  `,
})
export class ElMain implements OnInit {
  
  @Input() class: string
  
  constructor(
    private el: ElementRef,
  ) {}
  
  ngOnInit(): void {
    removeNgTag(this.el.nativeElement)
  }
}
