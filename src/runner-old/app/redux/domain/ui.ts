import { OnInit } from '@angular/core';
export interface Page{
    title: string;
    share: Share;
}

/**
 * 公众号
 */
export abstract class WeAccount{
    // 创建一个公众号
    abstract create(acidOrAccount: number): void;
}

export abstract class WeUtility{
    abstract createModule():void;
    abstract createModuleProcessor():void;
    abstract createModuleReceiver():void;
    abstract createModuleSite():void;
    abstract createModuleHook():void;
    abstract createModuleCron():void;
    abstract createModuleWxapp():void;
    abstract logging():void;
}


export abstract class WeBase{
    module: string;
    modulename: string;
    weid: string;
    uniacid: string;
    __define: string;

    abstract saveSettings():void;
    abstract createMobileUrl():void;
    abstract createWebUrl():void;
    abstract template():void;
    abstract fileSave():void;
    abstract fileUpload():void;
}


export abstract class WeModule extends WeBase{
    abstract fieldsFormDisplay():void;
    abstract fieldsFormValidate():void;
    abstract fieldsFormSubmit():void;
    abstract ruleDeleted():void;
    abstract settingsDisplay():void;
}

export abstract class WeModuleProcessor extends WeBase{
    priority: any;
    message: any;
    inContext: any;
    rule: any;

    abstract beginContext():void;
    abstract refreshContext():void;
    abstract endContext():void;
    abstract respond():void;

    abstract respText():void;
    abstract respImage():void;
    abstract respVoice():void;
    abstract respVideo():void;
    abstract respMusic():void;

    abstract respNews():void;
    abstract respCustom():void;
    abstract buildSiteUrl():void;

    abstract extend_W():void;
}

export abstract class WeModuleReceiver extends WeBase{
    params: any;
    response: any;
    keyword: any;
    message: any;
    abstract receive():void;
}


export abstract class WeModuleSite extends WeBase{
    inMobile: boolean;
    __call(name,...args){}
    __get(name){}
    pay(params: any,mine: any){}
    refund(tid: string,fee: number,reason: string){}
    payResult(ret: any){}
    payResultQuery(tid: string){}
    share(params: any){}
    click(params: any){}
}


export abstract class WeModuleCron extends WeBase{
    abstract addCronLog(tid: string,errno: string,note: string):void;
}

export abstract class WeModuleWxapp extends WeBase{

}

export abstract class WeModuleHook extends WeBase{
    
}
/**
 * 页面基础类型
 * 每个页面给一个配置一个连接,用来初始化页面设置
 */
export abstract class BasePage implements Page,OnInit{
    modulename: string;
    title: string = '基础页面';
    share: Share = {
        title: '分享标题',
        desc: '分享简介',
        image: '',
        link: ''
    };
    api: string = '';
    constructor(api: string = ''){
        this.api = api;
    }

    abstract initSetting(): void;
    ngOnInit(){
        this.initSetting();
    }
}

//首页设置
export interface IndexPage extends Page{
    advs: Adv[];
    footers: Footer[];
}

export interface Share{
    title?: string;
    desc?: string;
    image?: string;
    link?: string;
}

// 广告
export interface Adv{
    title: string;
    image: string;
    link: string;
}
//底部菜单
export interface Footer{
    title: string;
    icon: string;
    link: any[]
}