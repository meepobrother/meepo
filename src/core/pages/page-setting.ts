export abstract class PageSetting {
    setting: any;
    /**
     * 缓存中获取配置
     */
    abstract getSetting(): any;
    /**
     * 在线获取配置
     */
    abstract setSetting(setting: any): this;    
}
