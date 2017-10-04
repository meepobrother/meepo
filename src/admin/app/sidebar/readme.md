### ng.meepo.admin.sidebar

```html
<sidebar-container>
    <sidebar-list>
        <sidebar-header></sidebar-header>
        <sidebar-item (onItem)="onItem($event)" class="active">
            <i icon class="fa fa-home"></i> 门店
            <span sidebar-item-right class="label label-warning pull-right">16</span>
        </sidebar-item>
        <sidebar-item>
            <i icon class="fa fa-desktop"></i> 商品
        </sidebar-item>
        <sidebar-item>
            <i icon class="fa fa-group"></i> 会员
        </sidebar-item>
        <sidebar-item>
            <i icon class="fa fa-book"></i> 工单
        </sidebar-item>
        <sidebar-item>
            <i icon class="fa fa-credit-card"></i> 财务
        </sidebar-item>
        <sidebar-item>
            <i icon class="fa fa-signal"></i> 数据
        </sidebar-item>
        <sidebar-item>
            <i icon class="fa fa-cogs"></i> 设置
        </sidebar-item>
    </sidebar-list>
</sidebar-container>
```