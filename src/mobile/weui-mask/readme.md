### weui mask

```ts

@ViewChild(WeuiMask) weuiMask: WeuiMask;

this.weuiMask.onChange.subscribe(res=>{
    // 订阅状态切换
});

// 切换显示
this.weuiMask.toggle();

// 隐藏
this.weuiMask.hide();

// 显示
this.weuiMask.show();

```


```html

<weui-mask #mask="weuiMask"></weui-mask>
<button (click)="mask.show()"></button>

```