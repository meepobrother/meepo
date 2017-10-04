### 下拉加载更多

- 使用案例

```ts

loadmore(e: InfiniteLoader) {
    setTimeout(() => {
        // 本次加载结束
        e.resolveLoading();
    }, 2000);
    // 加载结束
    e.setFinished();
}

```

- 知识点
```ts
// 绑定scroll事件
this.disposeScroller = Observable
    .fromEvent(this.el.nativeElement.querySelector('.weui-infiniteloader__content'), 'scroll')
    .throttleTime(this.config.throttle)
    .subscribe(($event: any) => {
        this._onScroll($event);
    });

```