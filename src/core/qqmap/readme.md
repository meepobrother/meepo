### 腾讯地图
[查看演示](http://meepo.com.cn/angular/qqmap/)
```ts
import { QqmapModule } from 'meepo-qqmap';
@NgModule({
    imports: [
        QqmapModule
    ]
})
```

```html
<qqmap-page (laodSuccess)="laodSuccess($event)">
    <div>头部</div>
    <qqmap-container>

        <marker-cluster>
            <define-overlay lat="39.916538">
                自定义
            </define-overlay>¸
            <define-overlay lat="39.917549">
                自定义
            </define-overlay>¸
            <define-overlay lat="39.918550">
                自定义
            </define-overlay>¸
        </marker-cluster>

        <control>
            22222222222
        </control>
    </qqmap-container>
    <div>尾部</div>
</qqmap-page>
```