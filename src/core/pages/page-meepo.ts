import { Observable } from 'rxjs/Observable';

/**
 * meepo page
 */
export abstract class PageMeepo {
    /**
     * page id 用于识别page
     */
    pageId: string;

    /**
     * appkey
     */
    appkey: string;

    /**
     * appscrept
     */
    appscrept: string;

    /**
     * 用户自定义-版本号， 用于控制客户端页面缓存
     */
    version: string;

    /**
     * 更新版本
     */
    abstract checkVersion(): Observable<boolean>;
}

