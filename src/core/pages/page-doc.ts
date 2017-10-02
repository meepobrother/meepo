export abstract class PageDoc {
    /**
     * document对象
     */
    doc: any;
    abstract setDoc(_doc: any): this;

    abstract getDoc(): any;
}

