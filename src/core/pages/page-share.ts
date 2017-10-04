export interface Share {
    /**
     * 分享图标
     */
    icon: string,
    /**
     * 分享内容
     */
    content: string,
    /**
     * 分享链接
     */
    url: string,
    /**
     * 分享标题
     */
    title: string
}
/**
 * 微信页面
 */
export abstract class PageShare {
    share: Share;
    abstract setShare(share: Share): this;
    abstract getShare(): Share;
}

