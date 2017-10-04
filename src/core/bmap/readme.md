### 百度地图

[点击查看演示](http://meepo.com.cn/angular/bmap)


#### bmap-page
- 负责加载地图文件

#### bmap-container
- 地图渲染容器


```html
<bmap-page (laodSuccess)="laodSuccess($event)">
    <div>
        地图顶部
    </div>
    <bmap-container>
        <!-- 地图类型切换 -->
        <map-type-control></map-type-control>
        <!-- 缩放控制 -->
        <navigation-control></navigation-control>
        <!-- 小地图预览 -->
        <!-- <overview-map-control></overview-map-control> -->
        <!-- 比例尺 -->
        <scale-control></scale-control>
        <!-- 定位控制 -->
        <geolocation-control></geolocation-control>
        <citylist-control></citylist-control>

        <!-- 自定义marker -->
        <define-marker [lat]="lat" [lng]="lng">
            <h2 class="title">1111</h2>
            <p>介绍文字</p>
        </define-marker>

    </bmap-container>
    <div>
        地图底部
    </div>
</bmap-page>

```


```ts

lat: number = 116.404;
lng: number = 39.915;

```