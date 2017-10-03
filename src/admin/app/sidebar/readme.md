### ng.meepo.admin.sidebar

```html
<sidebar-container>
    <sidebar-list>
        <sidebar-item (onItem)="onItem($event)" class="active">
            <i icon class="fa fa-user"></i>
            <span>sidebar-item</span>
            <sidebar-list>
                <sidebar-child-item (onItem)="onItem($event)" class="active">
                    sidebar-child-item
                    <sidebar-list>
                        <sidebar-child-item (onItem)="onItem($event)" class="active">
                            sidebar-child-item
                        </sidebar-child-item>
                        <sidebar-child-item (onItem)="onItem($event)">
                            sidebar-child-item
                        </sidebar-child-item>
                    </sidebar-list>
                </sidebar-child-item>
                <sidebar-child-item>
                    sidebar-child-item
                </sidebar-child-item>
            </sidebar-list>
            <span sidebar-item-right class="label label-warning pull-right">16</span>
        </sidebar-item>
        <sidebar-item>
            <span>sidebar-item</span>
        </sidebar-item>
        <sidebar-item>
            <span>sidebar-item</span>
        </sidebar-item>
    </sidebar-list>
</sidebar-container>
```