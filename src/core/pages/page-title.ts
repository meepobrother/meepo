export abstract class PageTitle {
    /**
     * 页面标题
     */
    title: string;

    abstract getTitle(): string;

    abstract setTitle(title: string): this;
}

