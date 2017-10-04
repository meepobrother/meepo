### swiper

[点击查看演示](http://meepo.com.cn/angular/swiper)

- 知识点
```ts

forwardRef // 通过引入 forwardRef 让我们可以在使用构造注入时，使用尚未定义的依赖对象类型
SkipSelf // 样注入器从一个在自己 上一级 的组件开始搜索一个 Parent 依赖
Optional // 当Angular找不到依赖时，@Optional装饰器会告诉Angular继续执行，Angualr会把此注入参数设置为null（而不是默认的抛出错误的行为）。
Self // 只找自己
Host // 该装饰器将把往上搜索的行为截止在宿主组件。
ContentChildren
ContentChild
ViewChild
ViewChildren

```

#### swiper-page
- swiper 页面,负责引入swiper.min.js和swiper.min.css

#### swiper-container
- 一般选项
```ts
// 设定初始化时slide的索引。
@Input() initialSlide: number = 0;
// Slides的滑动方向，可设置水平(horizontal)或垂直(vertical)。
@Input() direction: string = 'horizontal';
// 滑动速度，即slider自动滑动开始到结束的时间（单位ms），也是触摸滑动时释放至贴合的时间。
@Input() speed: number = 300;
// 如需要开启视差效果（相对父元素移动），设置为true并在所需要的元素上增加data-swiper-parallax属性。
@Input() parallax: boolean = false;
// 自动切换的时间间隔（单位ms），不设定该参数slide不会自动切换。
@Input() autoplay: number = 3000;
// 虚拟位移。当你启用这个参数，Swiper除了不会移动外其他的都像平时一样运行，仅仅是不会在Wrapper上设置位移。当你想自定义一些slide切换效果时可以用。
// 启用这个选项时onSlideChange和onTransition事件失效。
@Input() virtualTranslate: boolean = false;
// 强制Swiper的宽度，当你的Swiper在隐藏状态下初始化时才用得上。这个参数会使自适应失效。
@Input() width: number;
// 强制Swiper的高度，当你的Swiper在隐藏状态下初始化时才用得上。这个参数会使自适应失效。
@Input() height: number;
// 设定为true将slide的宽和高取整(四舍五入)以防止某些分辨率的屏幕上文字或边界(border)模糊。
@Input() roundLengths: boolean = true;
// 自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化。
@Input() autoHeight: boolean = true;
// 用于嵌套相同方向的swiper时，当切换到子swiper时停止父swiper的切换。
// 请将子swiper的nested设置为true。
// 由于需要在slideChangeEnd时判断作用块，因此快速滑动时这个选项无效。
@Input() nested: boolean = true;

```

- free model

```ts

// 默认为false，普通模式：slide滑动时只滑动一格，并自动贴合wrapper，设置为true则变为free模式，slide会根据惯性滑动且不会贴合。
@Input() freeMode: boolean = false;
// 使得freeMode也能自动贴合。
@Input() freeModeSticky: boolean = true;

```


- loop
```ts
// 设置为true 则开启loop模式。loop模式：会在原本slide前后复制若干个slide(默认一个)并在合适的时候切换，让Swiper看起来是循环的。 
// loop模式在与free模式同用时会产生抖动，因为free模式下没有复制slide的时间点。
@Input() loop: boolean = true;
// 在loop模式下使用slidesPerview:'auto',还需使用该参数设置所要用到的loop个数。
@Input() loopedSlides: number = 1;
```


- 网格划分

```ts
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
@Input() spaceBetween: number = 0;
// 多行布局里面每列的slide数量。
@Input() slidesPerColumn: number = 1;
// 多行布局中以什么形式填充：
@Input() slidesPerColumnFill: string = 'column';
// 设定slide与左边框的预设偏移量（单位px）。
@Input() slidesOffsetBefore: number = 0;
// 设定slide与右边框的预设偏移量（单位px）。
@Input() slidesOffsetAfter: number = 0;

```

- 切换效果

```ts
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
    slideShadows : true
};


// 3d翻转有两个参数可设置。

// slideShadows：slides的阴影。默认true。
// limitRotation：限制最大旋转角度为180度，默认true。

@Input() flip: any = {
    slideShadows: true,
    limitRotation: true
};
```

- 点击

```ts
// 当swiper在触摸时阻止默认事件（preventDefault），用于防止触摸时触发链接跳转。
@Input() preventClicks: boolean = true;
// 阻止click冒泡。拖动Swiper时阻止click事件。
@Input() preventClicksPropagation: boolean = true;
// 设置为true则点击slide会过渡到这个slide。
@Input() slideToClickedSlide: boolean = true;
```


- Demo

```html
<swiper-page>
    <swiper-container autoplay="3000">
        <swiper-slide *ngFor="let item of items">{{item.title}}</swiper-slide>
        <div swiperButtonNext></div>
        <div swiperButtonPrev></div>
        <div swiperPagination></div>
    </swiper-container>

    <swiper-container direction="vertical">
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <div swiperPagination></div>
    </swiper-container>

    <swiper-container>
        <swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide>
        <swiper-slide>Slide 11</swiper-slide>
        <swiper-slide>Slide 12</swiper-slide>
        <div swiperScrollbar></div>
    </swiper-container>


    <swiper-container slidesPerView="3" freeModel="true">
        <swiper-slide>Slide 13</swiper-slide>
        <swiper-slide>Slide 14</swiper-slide>
        <swiper-slide>Slide 15</swiper-slide>
        <swiper-slide>Slide 16</swiper-slide>
        <swiper-slide>Slide 17</swiper-slide>
        <swiper-slide>Slide 18</swiper-slide>
        <swiper-slide>Slide 19</swiper-slide>
        <swiper-slide>Slide 20</swiper-slide>
        <div swiperPagination></div>
    </swiper-container>


    <swiper-container style="flex-direction: column;" direction="vertical" slidesPerView="auto" mousewheelControl="true" freeMode="true" roundLengths="true">
        <swiper-slide style="flex-direction: column;height: auto;">
            <h4>程序猿,你也配吃10元的盒饭?</h4>
            <p>又是一个阳光灿烂的中午，看了一上午的报纸，茶水也顺带喝了不少，肚子早已经咕咕作响了，今天中午吃点什么了，貌似楼下的新开张的盒饭还不错，于是我来到楼下准备买上一盒。<br> 菜色还不错，价格有6元，8元，10元，12元，20元的，像哥这样的精英管理人才，怎么着也的吃最高级的才配合身份，就在我准备购买时，一个响亮的声音响起。
            </p>
            <p>"老板，给我一份10元的盒饭"。</p>
            <p>顺势撇了一眼，一个小伙子，眉开眼笑的靠近盒饭铺，今天是1号，看样子是发工资了。就当他走近时，看到了我，刚才的欢愉的表情瞬时黯淡下去，他知道我认出了他，靠，满头白里带一点黑的头发，永远没睡醒的眼神，以及那凌乱的胡渣子，都出卖了他的身份。我继续狠狠的盯着他，他越发的羞愧了，我犀利的眼神正在和他做着底层通信，我默默的向他传达一个信息，<br> "你，也配吃10元的盒饭?"。
            </p>
            <p>又是一个阳光灿烂的中午，看了一上午的报纸，茶水也顺带喝了不少，肚子早已经咕咕作响了，今天中午吃点什么了，貌似楼下的新开张的盒饭还不错，于是我来到楼下准备买上一盒。<br> 菜色还不错，价格有6元，8元，10元，12元，20元的，像哥这样的精英管理人才，怎么着也的吃最高级的才配合身份，就在我准备购买时，一个响亮的声音响起。
            </p>
            <p>"老板，给我一份10元的盒饭"。</p>
            <p>顺势撇了一眼，一个小伙子，眉开眼笑的靠近盒饭铺，今天是1号，看样子是发工资了。就当他走近时，看到了我，刚才的欢愉的表情瞬时黯淡下去，他知道我认出了他，靠，满头白里带一点黑的头发，永远没睡醒的眼神，以及那凌乱的胡渣子，都出卖了他的身份。我继续狠狠的盯着他，他越发的羞愧了，我犀利的眼神正在和他做着底层通信，我默默的向他传达一个信息，<br> "你，也配吃10元的盒饭?"。
            </p>
            <p>又是一个阳光灿烂的中午，看了一上午的报纸，茶水也顺带喝了不少，肚子早已经咕咕作响了，今天中午吃点什么了，貌似楼下的新开张的盒饭还不错，于是我来到楼下准备买上一盒。<br> 菜色还不错，价格有6元，8元，10元，12元，20元的，像哥这样的精英管理人才，怎么着也的吃最高级的才配合身份，就在我准备购买时，一个响亮的声音响起。
            </p>
            <p>"老板，给我一份10元的盒饭"。</p>
            <p>顺势撇了一眼，一个小伙子，眉开眼笑的靠近盒饭铺，今天是1号，看样子是发工资了。就当他走近时，看到了我，刚才的欢愉的表情瞬时黯淡下去，他知道我认出了他，靠，满头白里带一点黑的头发，永远没睡醒的眼神，以及那凌乱的胡渣子，都出卖了他的身份。我继续狠狠的盯着他，他越发的羞愧了，我犀利的眼神正在和他做着底层通信，我默默的向他传达一个信息，<br> "你，也配吃10元的盒饭?"。
            </p>
            <p>又是一个阳光灿烂的中午，看了一上午的报纸，茶水也顺带喝了不少，肚子早已经咕咕作响了，今天中午吃点什么了，貌似楼下的新开张的盒饭还不错，于是我来到楼下准备买上一盒。<br> 菜色还不错，价格有6元，8元，10元，12元，20元的，像哥这样的精英管理人才，怎么着也的吃最高级的才配合身份，就在我准备购买时，一个响亮的声音响起。
            </p>
            <p>"老板，给我一份10元的盒饭"。</p>
            <p>顺势撇了一眼，一个小伙子，眉开眼笑的靠近盒饭铺，今天是1号，看样子是发工资了。就当他走近时，看到了我，刚才的欢愉的表情瞬时黯淡下去，他知道我认出了他，靠，满头白里带一点黑的头发，永远没睡醒的眼神，以及那凌乱的胡渣子，都出卖了他的身份。我继续狠狠的盯着他，他越发的羞愧了，我犀利的眼神正在和他做着底层通信，我默默的向他传达一个信息，<br> "你，也配吃10元的盒饭?"。
            </p>
        </swiper-slide>
        <div swiperScrollbar></div>
    </swiper-container>

    <swiper-container>
        <swiper-slide>哈哈</swiper-slide>
        <swiper-slide>嘿嘿</swiper-slide>
    </swiper-container>
</swiper-page>
```

```ts
items: any[] = [
    {
        title: 'Swiper 1'
    },
    {
        title: 'Swiper 2'
    },
    {
        title: 'Swiper 3'
    },
    {
        title: 'Swiper 4'
    }
];
```

```ts

import { SwiperModule } from 'meepo-swiper';

@NgModule({
  imports: [
    ...SwiperModule,
  ]
})
export class AppModule { }

```