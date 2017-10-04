#### 布局

- 上-中[左-中-右]-下
```html
<weui-page>
    <layout>
        <layout-header>
            顶部
        </layout-header>
        <layout-footer>
            底部
        </layout-footer>
        <layout-body style="align-items: center;justify-content: center;">
            <layout>
                <layout-left style="align-items: center;justify-content: center;">
                    左菜单
                </layout-left>
                <layout-right style="align-items: center;justify-content: center;">
                    右菜单
                </layout-right>
                <layout-body style="align-items: center;justify-content: center;">
                    <p style="text-align:center;">主体部分</p>
                </layout-body>
            </layout>
        </layout-body>
    </layout>
</weui-page>

```


- 左-中-右-上-下
```html
<weui-page>
    <layout>
        <layout-header>
            顶部
        </layout-header>
        <layout-footer>
            底部
        </layout-footer>
        <layout-left>
            左菜单
        </layout-left>
        <layout-right>
            右菜单
        </layout-right>
        <layout-body>
            <p style="text-align:center;">主体部分</p>
        </layout-body>
    </layout>
</weui-page>

```