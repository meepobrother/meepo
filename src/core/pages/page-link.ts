export abstract class PageLink {
    /**
     * 页面链接
     */
    pageLink: string[];

    abstract setPageLink(link: string[]): this;

    abstract getPageLink(): string[];
}

