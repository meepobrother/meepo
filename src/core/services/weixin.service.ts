import { Share } from '../pages';
import { Observable } from 'rxjs/Observable';

export abstract class WeixinServiceInterface {
    abstract config(config: { debug: boolean, appId: string, timestamp: string, nonceStr: string, signature: string, jsApiList: string[] }): this;
    abstract ready(): Observable<boolean>;
    abstract error(): Observable<boolean>;
    abstract checkJsApi(config: { jsApiList: string[] }): Observable<any>;
    abstract onMenuShareTimeline(config: { title: string, link: string, imgUrl: string }): Observable<boolean>;
    abstract onMenuShareAppMessage(config: { title: string, desc: string, link: string, imgUrl: string, type: string, dataUrl: string }): Observable<boolean>;
    abstract onMenuShareQQ(config: { title: string, desc: string, link: string, imgUrl: string }): Observable<boolean>;
    abstract onMenuShareWeibo(config: { title: string, desc: string, link: string, imgUrl: string }): Observable<boolean>;
    abstract onMenuShareQZone(config: { title: string, desc: string, link: string, imgUrl: string }): Observable<boolean>;
    abstract chooseImage(config: { count: number, sizeType: string[], sourceType: string[] }): Observable<{ localIds: string[] }>;
    abstract previewImage(config: { current: string, urls: string[] }): this;
    abstract uploadImage(config: { localId: string, isShowProgressTips: 0 | 1 }): Observable<{ serverId: string }>;
    abstract downloadImage(config: { serverId: string, isShowProgressTips: 0 | 1 }): Observable<{ localId: string }>;
    abstract getLocalImgData(config: { localId: string }): Observable<{ localData: string }>;
    abstract startRecord(): this;
    abstract stopRecord(): Observable<{ localId: string }>;
    abstract onVoiceRecordEnd(): Observable<{ localId: string }>;
    abstract playVoice(config: { localId: string }): this;
    abstract pauseVoice(config: { localId: string }): this;
    abstract stopVoice(config: { localId: string }): this;
    abstract onVoicePlayEnd(): Observable<{ localId: string }>;
    abstract uploadVoice(config: { localId: string, isShowProgressTips: 0 | 1 }): Observable<{ serverId: string }>;
    abstract downloadVoice(config: { serverId: string, isShowProgressTips: 0 | 1 }): Observable<{ localId: string }>;
    abstract translateVoice(config: { localId: string, isShowProgressTips: 0 | 1 }): Observable<{ translateResult: string }>;
    abstract getNetworkType(): Observable<{ networkType: string }>;
    abstract openLocation(config: { latitude: number, longitude: number, name: string, address: string, scale: number, infoUrl: string }): this;
    abstract getLocation(config: { type: string }): Observable<{ latitude: number, longitude: number, speed: number, accuracy: number }>;
    abstract startSearchBeacons(config: { ticket: string }): Observable<any>;
    abstract stopSearchBeacons(): Observable<any>;
    abstract onSearchBeacons(): Observable<any>;
    abstract closeWindow(): this;
    abstract hideMenuItems(config: { menuList: string[] }): this;
    abstract showMenuItems(config: { menuList: string[] }): this;
    abstract hideAllNonBaseMenuItem(): this;
    abstract showAllNonBaseMenuItem(): this;
    abstract scanQRCode(config: { needResult: number, scanType: string[] }): Observable<{ resultStr: string }>;
    abstract openProductSpecificView(config: { productId: string, viewType: string }): this;
    abstract chooseCard(config: WeixinChooseCardConfig): Observable<{ cardList: any[] }>;
    abstract addCard(config: WeixinAddCardConfig): Observable<{ cardList: any[] }>;
    abstract openCard(config: WeixinOpenCardConfig): this;
    abstract chooseWXPay(config: WeixinPayConfig): Observable<any>;
    abstract openAddress(): Observable<WeixinAddress>;
}


export interface WeixinChooseCardConfig {
    shopId: string;
    cardType: string;
    cardId: string;
    timestamp: number;
    nonceStr: string;
    signType: string;
    cardSign: string;
}

export interface WeixinAddCardConfigItem {
    cardId: string;
    cardExt: string;
}

export interface WeixinAddCardConfig {
    cardList: WeixinAddCardConfigItem[];
}

export interface WeixinOpenCardConfigItem {
    cardId: string;
    code: string
}

export interface WeixinOpenCardConfig {
    cardList: WeixinOpenCardConfigItem[];
}

export interface WeixinPayConfig {
    timestamp: string;
    nonceStr: string;
    package: string;
    signType: string;
    paySign: string;
}

export interface WeixinAddress {
    userName: string;
    postalCode: string;
    provinceName: string;
    cityName: string;
    countryName: string;
    detailInfo: string;
    nationalCode: string;
    telNumber: string;
}