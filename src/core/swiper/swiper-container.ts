import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    ContentChild,
    ViewChild,
    QueryList,
    ContentChildren,
    ChangeDetectorRef,
    Optional,
    Inject,
    AfterContentInit,
    ElementRef,
    HostBinding,
    SkipSelf,
    forwardRef,
    Input,
    OnChanges
} from '@angular/core';

import {
    DOCUMENT
} from '@angular/common';

export function isTrueProperty(val: any): boolean {
    if (typeof val === 'string') {
        val = val.toLowerCase().trim();
        return (val === 'true' || val === 'on' || val === '');
    }
    return !!val;
}


import { startWith } from 'rxjs/operator/startWith';
import { SwiperWrapper } from './swiper-wrapper';
import { SwiperSlide } from './swiper-slide';
import { SwiperPage } from './swiper-page';

import { SwiperPagination } from './swiper-pagination';
import { SwiperButtonNext } from './swiper-button-next';
import { SwiperButtonPrev } from './swiper-button-prev';
import { SwiperScrollbar } from './swiper-scrollbar';

import { SwiperService } from './swiper.service';

@Component({
    selector: 'swiper-container',
    templateUrl: 'swiper-container.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false
})
export class SwiperContainer implements OnInit, AfterContentInit {
    @Input() name: string = 'swiper';
    @HostBinding('class.swiper-container') hasSwiperContainer: boolean = true;

    options: any = {};
    // 设定初始化时slide的索引。
    @Input() initialSlide: number = 0;
    // Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
    @Input() direction: string = 'horizontal';
    // 滑动速度，即slider自动滑动开始到结束的时间（单位ms），也是触摸滑动时释放至贴合的时间。
    @Input() speed: number = 300;
    // 如需要开启视差效果（相对父元素移动），设置为true并在所需要的元素上增加data-swiper-parallax属性。
    @Input() parallax: boolean = false;
    // 自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
    @Input() autoplay: number;
    // 虚拟位移。当你启用这个参数，Swiper除了不会移动外其他的都像平时一样运行，仅仅是不会在Wrapper上设置位移。当你想自定义一些slide切换效果时可以用。
    // 启用这个选项时onSlideChange和onTransition事件失效。
    @Input() virtualTranslate: boolean = false;
    // 强制Swiper的宽度，当你的Swiper在隐藏状态下初始化时才用得上。这个参数会使自适应失效。
    @Input() width: number;
    // 强制Swiper的高度，当你的Swiper在隐藏状态下初始化时才用得上。这个参数会使自适应失效。
    @Input() height: number;
    // 设定为true将slide的宽和高取整(四舍五入)以防止某些分辨率的屏幕上文字或边界(border)模糊。
    @Input() roundLengths: boolean = false;
    // 自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
    @Input() autoHeight: boolean = false;
    // 用于嵌套相同方向的swiper时，当切换到子swiper时停止父swiper的切换。
    // 请将子swiper的nested设置为true。
    // 由于需要在slideChangeEnd时判断作用块，因此快速滑动时这个选项无效。
    @Input() nested: boolean = true;

    // 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动且不会贴合。
    _freeMode: boolean = false;
    @Input()
    set freeMode(val: boolean) {
        this._freeMode = isTrueProperty(val);
    }
    get freeMode() {
        return this._freeMode;
    }
    // 使得freeMode也能自动贴合。
    @Input() freeModeSticky: boolean = false;

    // 设置为true 则开启loop模式。loop模式：会在原本slide前后复制若干个slide(默认一个)并在合适的时候切换，让Swiper看起来是循环的。 
    // loop模式在与free模式同用时会产生抖动，因为free模式下没有复制slide的时间点。
    _loop: boolean = false;
    @Input()
    set loop(val: boolean) {
        this._loop = isTrueProperty(val);
    }
    get loop() {
        return this._loop;
    }

    _mousewheelControl: boolean = false;
    @Input()
    set mousewheelControl(val: boolean) {
        this._mousewheelControl = isTrueProperty(val);
    }
    get mousewheelControl() {
        return this._mousewheelControl;
    }
    // 在loop模式下使用slidesPerview:'auto',还需使用该参数设置所要用到的loop个数。
    @Input() loopedSlides: number = 1;


    // 焦距功能：双击slide会放大，并且在手机端可双指触摸缩放。
    @Input() zoom: boolean = false;
    // 最大缩放焦距（放大倍率）。
    @Input() zoomMax: number = 3;
    // 最小缩放焦距（缩小倍率）。
    @Input() zoomMin: number = 1;
    // 是否允许双击缩放。
    @Input() zoomToggle: boolean = true;

    /**
     * 网格划分
     */
    // 设定为true时，活动块会居中，而不是默认状态下的居左。
    @Input() centeredSlides: boolean = false;
    // 设置slider容器能够同时显示的slides数量(carousel模式)。
    // 可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。
    // loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
    @Input() slidesPerView: number = 1;
    // 在carousel mode下定义slides的数量多少为一组。
    @Input() slidesPerGroup: number = 1;
    // slide之间的距离（单位px）。
    @Input() spaceBetween: number = 5;
    // 多行布局里面每列的slide数量。
    @Input() slidesPerColumn: number = 1;
    // 多行布局中以什么形式填充：
    @Input() slidesPerColumnFill: string = 'column';
    // 设定slide与左边框的预设偏移量（单位px）。
    @Input() slidesOffsetBefore: number = 0;
    // 设定slide与右边框的预设偏移量（单位px）。
    @Input() slidesOffsetAfter: number = 0;


    /**
     * 切换效果
     */

    // slide的切换效果，默认为"slide"（位移切换），可设置为"fade"（淡入）"cube"（方块）"coverflow"（3d流）"flip"（3d翻转）。
    @Input() effect: string = 'slide';

    // fade效果参数。可选参数：crossFade(3.03启用)。
    // 默认：false。关闭淡出。过渡时，原slide透明度为1（不淡出），过渡中的slide透明度从0->1（淡入），其他slide透明度0。
    // 可选值：true。开启淡出。过渡时，原slide透明度从1->0（淡出），过渡中的slide透明度从0->1（淡入），其他slide透明度0。
    @Input() fade: boolean = false;

    // cube效果参数，可选值：
    // slideShadows：开启slide阴影。默认 true。
    // shadow： 开启投影。默认 true。
    // shadowOffset：投影距离。默认 20，单位px。
    // shadowScale： 投影缩放比例。默认0.94。
    @Input() cube: any = {
        slideShadows: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94
    };
    // cover flow是类似于苹果将多首歌曲的封面以3D界面的形式显示出来的方式。coverflow效果参数，可选值：

    // rotate：slide做3d旋转时Y轴的旋转角度。默认50。
    // stretch：每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
    // depth：slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
    // modifier：depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
    // slideShadows：开启slide阴影。默认 true。

    @Input() coverflow: any = {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    };


    // 3d翻转有两个参数可设置。

    // slideShadows：slides的阴影。默认true。
    // limitRotation：限制最大旋转角度为180度，默认true。

    @Input() flip: any = {
        slideShadows: true,
        limitRotation: true
    };


    /**
     * 点击
     */

    // 当swiper在触摸时阻止默认事件（preventDefault），用于防止触摸时触发链接跳转。
    @Input() preventClicks: boolean = true;
    // 阻止click冒泡。拖动Swiper时阻止click事件。
    @Input() preventClicksPropagation: boolean = true;
    // 设置为true则点击slide会过渡到这个slide。
    @Input() slideToClickedSlide: boolean = true;


    @Input() observer: boolean = true;
    @Input() observeParents: boolean = true;


    @Input() preloadImages: boolean = false;
    @Input() updateOnImagesReady: boolean = true;
    @Input() lazyLoading: boolean = true;
    @Input() lazyLoadingInPrevNext: boolean = true;
    @Input() lazyLoadingOnTransitionStart: boolean = true;
    // 滚动项目
    @ContentChildren(SwiperSlide) _slides: QueryList<SwiperSlide>;
    // 分页
    @ContentChild(SwiperPagination) swiperPagination: SwiperPagination;
    // 下一个
    @ContentChild(SwiperButtonNext) swiperButtonNext: SwiperButtonNext;
    // 上一个
    @ContentChild(SwiperButtonPrev) swiperButtonPrev: SwiperButtonPrev;
    // 滚动条
    @ContentChild(SwiperScrollbar) swiperScrollbar: SwiperScrollbar;

    _swiper: any;
    constructor(
        public ele: ElementRef,
        public _swiper$: SwiperService
    ) { }

    ngOnInit() {
        this.options = {
            prevButton: this.swiperButtonPrev ? this.swiperButtonPrev.ele.nativeElement : null,
            nextButton: this.swiperButtonNext ? this.swiperButtonNext.ele.nativeElement : null,
            pagination: this.swiperPagination ? this.swiperPagination.ele.nativeElement : null,
            scrollbar: this.swiperScrollbar ? this.swiperScrollbar.ele.nativeElement : null,
            preloadImages: this.preloadImages,
            updateOnImagesReady: this.updateOnImagesReady,
            lazyLoadingOnTransitionStart: this.lazyLoadingOnTransitionStart,
            lazyLoading: this.lazyLoading,
            lazyLoadingInPrevNext: this.lazyLoadingInPrevNext,
            direction: this.direction,
            speed: this.speed,
            autoplay: this.autoplay,
            roundLengths: this.roundLengths,
            autoHeight: this.autoHeight,
            width: this.width,
            height: this.height,
            nested: this.nested,
            preventClicks: this.preventClicks,
            preventClicksPropagation: this.preventClicksPropagation,
            slideToClickedSlide: this.slideToClickedSlide,
            observer: this.observer,
            observeParents: this.observeParents,
            flip: this.flip,
            coverflow: this.coverflow,
            cube: this.cube,
            effect: this.effect,
            fade: this.fade,
            centeredSlides: this.centeredSlides,
            slidesPerView: this.slidesPerView,
            slidesPerGroup: this.slidesPerGroup,
            spaceBetween: this.spaceBetween,
            slidesPerColumn: this.slidesPerColumn,
            slidesPerColumnFill: this.slidesPerColumnFill,
            slidesOffsetBefore: this.slidesOffsetBefore,
            slidesOffsetAfter: this.slidesOffsetAfter,
            zoom: this.zoom,
            zoomMax: this.zoomMax,
            zoomMin: this.zoomMin,
            zoomToggle: this.zoomToggle,
            loop: this.loop,
            loopedSlides: this.loopedSlides,
            freeMode: this.freeMode,
            freeModeSticky: this.freeModeSticky,
            virtualTranslate: this.virtualTranslate,
            parallax: this.parallax,
            initialSlide: this.initialSlide,
            mousewheelControl: this.mousewheelControl
        };
        this._swiper$.loadJScript().laodSuccess.subscribe(swiper => {
            this.init(swiper);
        });
    }
    // 更新容器
    update() { }
    // 初始化
    init(swiper: any) {
        setTimeout(() => {
            this._swiper = new swiper(this.ele.nativeElement, this.options);
            this._swiper$.addSwiper(this.name,this._swiper);
        }, 0);
    }
    ngAfterContentInit() { }
}

