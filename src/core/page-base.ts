
import { OnInit } from '@angular/core';
import {
    PageShare, PageMeepo,
    PageTitle, PageDoc, Share,
    PageLink, PageSetting, PageMainVersion,
    PageUniacid
} from './pages';
import { Observable } from 'rxjs/Observable';
/**
 * 页面基类
 */
export abstract class PageBase implements PageMeepo, PageTitle,
    PageDoc, PageShare, PageLink, PageSetting, PageMainVersion, PageUniacid {
    pageId: string;
    appkey: string;
    appscrept: string;
    version: string;
    title: string;
    doc: any;
    share: Share;
    pageLink: string[];
    setting: any;
    mainVersion: string;
    uniacid: string;
    checkVersion(): Observable<boolean> {
        return Observable.create(observer => {
            observer.next(true);
            observer.complete();
        });
    }

    getDoc(): any {
        return this.doc;
    }

    setDoc(doc: any): this {
        this.doc = doc;
        return this;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string): this {
        this.title = title;
        this.getDoc().title = this.title;
        return this;
    }

    getShare(): Share {
        return this.share;
    }

    setShare(share: Share): this {
        this.share = share;
        return this;
    }

    getPageLink(): string[] {
        return this.pageLink;
    }

    setPageLink(link: string[]): this {
        this.pageLink = link;
        return this;
    }

    setSetting(setting: any): this {
        this.setting = setting;
        return this;
    }

    getSetting(): any {
        return this.setting;
    }

    checkMainVersion(): Observable<boolean> {
        return Observable.create((observer) => {
            observer.next(true);
            observer.complete();
        });
    }

    getUniacid(): string {
        return this.uniacid;
    }

    setUniacid(uniacid: string): this {
        this.uniacid = uniacid;
        return this;
    }
}