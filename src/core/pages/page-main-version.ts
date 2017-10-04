import { Observable } from 'rxjs/Observable';

export abstract class PageMainVersion {
    /**
     * 程序版本号，用于控制程序更新检查, 每个页面一个版本号
     */
    mainVersion: string;
    /**
     * 检查版本号是否一致
     */
    abstract checkMainVersion(): Observable<boolean>;
}

