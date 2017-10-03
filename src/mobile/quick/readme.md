### 快捷菜单

- [查看演示](http://meepo.com.cn/angular/quick)

```html
<quick-menu [items]="items">
    <div (click)="onItem(item)" *quickItemOutlet="let item">
        <img [src]="item.image" alt="">
        <span>{{item.title}}</span>
    </div>
</quick-menu>
```