
import { OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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
        @Inject(DOCUMENT) public document: any
    ){}

    ngOnInit() { 
        this.setTitle(this.title);
    }

    setTitle(val: string) {
        this.document.setTitle(this.title);
    }
}