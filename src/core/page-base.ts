
import { OnInit, Inject, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Title } from '@angular/platform-browser';
/**
 * 页面基类
 */
export abstract class PageBase implements OnInit {
    /**
     * 页面及分享标题
     */
    title: string;
    /**
     * 分享图标
     */
    icon: string;
    /**
     * 分享内容
     */
    content: string;
    /**
     * 分享链接
     */
    url: string;

    constructor(
        @Optional() @Inject(DOCUMENT) public _document$: any,
    ) {
        this._document$ = this._document$ || {};
    }

    ngOnInit() {
        this.setTitle(this.title);
    }

    setTitle(val: string) {
        this._document$.title = this.title;
    }

}