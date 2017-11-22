import {
  Component, Input, Output, EventEmitter, ElementRef, Optional, OnInit,
} from '@angular/core'
import { ElRadioGroup } from './radio-group'
import { isParentTag, removeNgTag } from '../shared/utils'

@Component({
  selector: 'el-radio',
  template: `
    <label class="el-radio" role="radio" tabindex="0">
      <span class="el-radio__input"
        style="float: left;"
        [class.is-disabled]="disabled"
        [class.is-checked]="model === label"
        [class.is-focus]="isFocus">
        <span class="el-radio__inner"></span>
        <input class="el-radio__original" type="radio"
          [value]="label" [name]="nativeName" [disabled]="disabled"
          (focus)="isFocus = true" (blur)="isFocus = false"
          [ngModel]="model" (ngModelChange)="changeHandle()">
      </span>
      <span class="el-radio__label"><ng-content></ng-content></span>
    </label>
  `,
})
export class ElRadio implements OnInit {
  
  @Input() disabled: boolean = false
  @Input() label: string | number = ''
  @Input('name') nativeName: string = ''
  @Input() model: any
  @Output() modelChange: EventEmitter<any> = new EventEmitter<any>()
  
  isFocus: boolean = false
  parentIsGroup: boolean = false
  
  constructor(
    @Optional() private rootGroup: ElRadioGroup,
    private el: ElementRef,
  ) {
  }
  
  changeHandle(): void {
    if (this.parentIsGroup) {
      return this.rootGroup.changeHandle(this.label)
    }
    this.modelChange.emit(this.label)
  }
  
  ngOnInit(): void {
    const nativeElement = this.el.nativeElement
    const update = () => {
      this.disabled = this.rootGroup.disabled
      this.model = this.rootGroup.model
    }
    this.parentIsGroup = isParentTag(nativeElement, 'el-radio-group')
    removeNgTag(nativeElement)
    
    if (this.parentIsGroup && this.rootGroup) {
      update()
      this.rootGroup.subscriber.push(update)
    }
  }
}
