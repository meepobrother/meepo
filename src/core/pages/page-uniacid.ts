/**
 * page with uniacid
 */
export abstract class PageUniacid {
    /**
     * 平台用户
     */
    uniacid: string;

    abstract setUniacid(uniacid: string): this;

    abstract getUniacid(): string;
}

