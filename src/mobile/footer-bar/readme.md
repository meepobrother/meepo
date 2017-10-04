### 底部菜单

```html
<layout>
    <layout-body>
        <router-outlet></router-outlet>
    </layout-body>
    <layout-footer>
        <footer-bar [items]="items">
            <ng-container *footerBarOutlet="let item">
                <img src="./assets/icon_tabbar.png" alt="">
                <p routerLinkActive="active">{{item.title}}</p>
            </ng-container>
        </footer-bar>
    </layout-footer>
</layout>
```