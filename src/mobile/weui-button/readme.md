```html

<weui-page>

    <button weui-btn default (click)="onClick()">weui button default</button>
    <button weui-btn default disabled (click)="onClick()">weui button default disable</button>
    <button weui-btn default inline (click)="onClick()">weui button default inline</button>
    <button weui-btn default loading (click)="onClick()">
        weui button default loading
    </button>
    <button weui-btn primary loading (click)="onClick()">
        weui button default loading
    </button>
    <button weui-btn warn loading (click)="onClick()">
        weui button default loading
    </button>
    <button weui-btn warn mini (click)="onClick()">
        weui button default loading
    </button>

    <weui-btn-area>
        <button weui-btn warn loading (click)="onClick()">
                    weui button default loading
                </button>
        <button weui-btn warn mini (click)="onClick()">
                    weui button default loading
                </button>
    </weui-btn-area>

    <weui-btn-area-inline>
        <button weui-btn warn mini loading (click)="onClick()">weui button default loading</button>
        <button weui-btn warn mini (click)="onClick()">weui button default loading</button>
    </weui-btn-area-inline>

    <button weui-btn plain-primary>
        plain-primary
    </button>
    <button weui-btn plain-default>
        plain-primary
    </button>
    <button weui-btn plain-disable>
        plain-primary
    </button>
</weui-page>

```