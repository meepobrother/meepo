import {Component, ElementRef, Input, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';

function uuid() {
  const s = [];
  const hexDigits = "0123456789abcdef";
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  const uuid = s.join("");
  return uuid;
}

@Component({
  selector: 'swiper-default',
  templateUrl: './swiper-default.component.html',
  styleUrls: ['./swiper-default.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwiperDefaultComponent implements OnInit {
  randClass: string = uuid()
  @Input() hasWater: boolean = false;
  // 高度
  @Input() height: string = '180px';

  @Input() backgroundColor: string = 'inherit';

  // 是否显示页码
  _hasPage: boolean;
  
  @Input()
  get hasPage(){
    return this._hasPage;
  }
  set hasPage(val: boolean){
    this._hasPage = val;
    console.log(this._hasPage);
    if(val){
      this.option['pagination'] = '.swiper-pagination';
      this.option['paginationClickable'] = 'true';
      this.swiper && this.swiper.update();
    }
  }

  // 方向
  _direction: string;
  @Input()
  get direction(){
    return this._direction;
  }
  set direction(val: string){
    this._direction = val;
    if(val){
      this.option['direction'] = this._direction
      this.swiper && this.swiper.update();
    }
  }

  // 视觉效果
  _parallax: boolean;
  @Input()
  get parallax(){
    return this._parallax
  }
  set parallax(val: boolean){
    this._parallax = val;
    if(val){
      this.option['parallax'] = val;
      this.swiper && this.swiper.update();
    }
  }

  // 渐变效果
  _effect: string;
  @Input()
  get effect(){
    return this._effect
  }
  set effect(val: string){
    this._effect = val;
    if(val){
      this.option['effect'] = val;
      this.swiper && this.swiper.update();
    }
  }

  // 间隙
  _spaceBetween: number;
  @Input()
  get spaceBetween(){
    return this._spaceBetween
  }
  set spaceBetween(val: number){
    this._spaceBetween = val;
    if(val){
      this.option['spaceBetween'] = Math.floor(val);
      this.swiper && this.swiper.update();
    }
  }

  // 分组
  _slidesPerView: number;
  @Input()
  get slidesPerView(){
    return this._slidesPerView;
  }
  set slidesPerView(val: number){
    this._slidesPerView = Math.floor(val)
    if(val){
      this.option['slidesPerView'] = this._slidesPerView
    }
  }

  // 居中
  _centeredSlides: boolean;
  @Input()
  get centeredSlides(){
    return this._centeredSlides;
  }
  set centeredSlides(val: boolean){
    this._centeredSlides = val;
    if(val){
      this.option['centeredSlides'] = val;
    }
  }

  // 自由模式
  _freeMode: boolean;
  @Input()
  get freeMode(){
    return this._freeMode
  }
  set freeMode(val: boolean){
    this._freeMode = val;
    if(val){
      this.option['freeMode'] = val;
    }
  }

  // 列数
  _slidesPerColumn: number;
  @Input()
  get slidesPerColumn(){
    return this._slidesPerColumn;
  }
  set slidesPerColumn(val: number){
    this._slidesPerColumn = Math.floor(val)
    if(val){
      this.option['slidesPerColumn'] = this._slidesPerColumn
    }
  }

  // 循环
  _loop: boolean;
  @Input()
  get loop(){
    return this._loop
  }
  set loop(val: boolean){
    this._loop = val;
    if(val){
      this.option['loop'] = this._loop
    }
  }


  // 文字内容
  _text: boolean;
  @Input()
  get text(){
    return this._text
  }
  set text(val: boolean){
    this._text = val;
    if(val){
      this.option['scrollbar'] = '.swiper-scrollbar';
      this.option['direction'] = 'vertical';
      this.option['slidesPerView'] = 'auto';
      this.option['mousewheelControl'] = true;
      this.option['freeMode'] = true;
      this.option['roundLengths'] = true;
    }
  }
  swiper: any;

  option: any = {}
  _autoplay: number = 3000;
  @Input() 
  set autoplay(val: number){
    if(val){
      this._autoplay = val;
      this.option['autoplay'] = this._autoplay
    }
  }

  ngAfterContentInit (){
    setTimeout(()=>{
      window['requirejs']([
        window['module_url']+ 'assets/bower_components/swiper/js/swiper.min.js'
      ],()=>{
        this.swiper = new window['Swiper']('.swiper-container-'+this.randClass,this.option);
      })
    }, 500)
  }

  public update(){
    this.swiper.update();
  }

  constructor(
      private ele: ElementRef,
      private renderer: Renderer2
  ) {
    this.renderer.setStyle(this.ele.nativeElement,'position','relative')
    this.renderer.setStyle(this.ele.nativeElement,'display','block')
  }

  ngOnInit() {

  }

}
