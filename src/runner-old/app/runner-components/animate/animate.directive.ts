import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[animate]'
})
export class AnimateDirective {
  _animate: string = '';
  @Input()
  set animate(val: string){
    if(this._animate != val){
      this.removeAnimate();
      this._animate = val;
      this.addAnimate()
    }
  }
  constructor(
      public ele: ElementRef,
      public render: Renderer2
  ) {
    this.render.addClass(this.ele.nativeElement,'animated')
  }

  addAnimate(){
    if(this._animate){
      this.render.addClass(this.ele.nativeElement,this._animate)
    }

  }

  removeAnimate(){
    if(this._animate){
      this.render.removeClass(this.ele.nativeElement,this._animate)
    }
  }

}
