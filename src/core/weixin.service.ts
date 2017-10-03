
import {
    WeixinServiceInterface, WeixinChooseCardConfig,
    WeixinAddCardConfig, WeixinOpenCardConfig,
    WeixinPayConfig, WeixinAddress
} from './services';
import { Observable } from 'rxjs/Observable';

export class WeixinService implements WeixinServiceInterface {
    wx: any;
    config(config: { debug: boolean, appId: string, timestamp: string, nonceStr: string, signature: string, jsApiList: string[] }): this {
        return this;
    }

    ready(): Observable<boolean> {
        return Observable.create(observer => {
            this.wx.ready(() => {
                observer.next(true);
                observer.complete();
            });
            this.wx.error(() => {
                observer.next(false);
                observer.complete();
            });
        });
    }

    error(): Observable<boolean> {
        return Observable.create(observer => {
            this.wx.ready(() => {
                observer.next(false);
                observer.complete();
            });
            this.wx.error(() => {
                observer.next(true);
                observer.complete();
            });
        });
    }

    checkJsApi(config: { jsApiList: string[] }): Observable<any> {
        return Observable.create(observer => {
            this.wx.checkJsApi({
                jsApiList: config.jsApiList,
                success: (res: any) => {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    onMenuShareTimeline(config: { title: string, link: string, imgUrl: string }): Observable<boolean> {
        return Observable.create(observer => {
            this.wx.onMenuShareTimeline({
                title: config.title,
                link: config.link,
                imgUrl: config.imgUrl,
                success: () => {
                    observer.next(true);
                    observer.complete();
                },
                cancel: () => {
                    observer.next(false);
                    observer.complete();
                }
            });
        });
    }

    onMenuShareAppMessage(config: { title: string, desc: string, link: string, imgUrl: string, type: string, dataUrl: string }): Observable<boolean> {
        return Observable.create(observer => {
            this.wx.onMenuShareAppMessage({
                title: config.title,
                desc: config.desc,
                link: config.link,
                imgUrl: config.imgUrl,
                type: config.type,
                dataUrl: config.dataUrl,
                success: () => {
                    observer.next(true);
                    observer.complete();
                },
                cancel: () => {
                    observer.next(false);
                    observer.complete();
                }
            });
        });
    }

    onMenuShareQQ(config: { title: string, desc: string, link: string, imgUrl: string }): Observable<boolean> {
        return Observable.create(observer => {
            this.wx.onMenuShareQQ({
                title: config.title,
                desc: config.desc,
                link: config.link,
                imgUrl: config.imgUrl,
                success: () => {
                    observer.next(true);
                    observer.complete();
                },
                cancel: () => {
                    observer.next(false);
                    observer.complete();
                }
            });
        });
    }

    onMenuShareWeibo(config: { title: string, desc: string, link: string, imgUrl: string }): Observable<boolean> {
        return Observable.create(observer => {
            this.wx.onMenuShareQQ({
                title: config.title,
                desc: config.desc,
                link: config.link,
                imgUrl: config.imgUrl,
                success: () => {
                    observer.next(true);
                    observer.complete();
                },
                cancel: () => {
                    observer.next(false);
                    observer.complete();
                }
            });
        });
    }

    onMenuShareQZone(config: { title: string, desc: string, link: string, imgUrl: string }): Observable<boolean> {
        return Observable.create(observer => {
            this.wx.onMenuShareQZone({
                title: config.title,
                desc: config.desc,
                link: config.link,
                imgUrl: config.imgUrl,
                success: () => {
                    observer.next(true);
                    observer.complete();
                },
                cancel: () => {
                    observer.next(false);
                    observer.complete();
                }
            });
        });
    }

    chooseImage(config: { count: number, sizeType: string[], sourceType: string[] }): Observable<{ localIds: string[] }> {
        return Observable.create(observer => {
            this.wx.chooseImage({
                count: config.count,
                sizeType: config.sizeType,
                sourceType: config.sourceType,
                success: (res) => {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    previewImage(config: { current: string, urls: string[] }): this {
        this.wx.previewImage({
            current: config.current,
            urls: config.urls
        });
        return this;
    }

    uploadImage(config: { localId: string, isShowProgressTips: number }): Observable<{ serverId: string }> {
        return Observable.create(observer => {
            this.wx.uploadImage({
                localId: config.localId,
                isShowProgressTips: config.isShowProgressTips,
                success: (res) => {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    downloadImage(config: { serverId: string, isShowProgressTips: number }): Observable<{ localId: string }> {
        return Observable.create(observer => {
            this.wx.downloadImage({
                serverId: config.serverId,
                isShowProgressTips: config.isShowProgressTips,
                success: (res) => {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    getLocalImgData(config: { localId: string }): Observable<{ localData: string }> {
        return Observable.create(observer => {
            this.wx.getLocalImgData({
                localId: config.localId,
                success: (res) => {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    startRecord(): this {
        this.wx.startRecord();
        return this;
    }

    stopRecord(): Observable<{ localId: string }> {
        return Observable.create(observer => {
            this.wx.stopRecord({
                success: (res) => {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    onVoiceRecordEnd(): Observable<{ localId: string }> {
        return Observable.create(observer => {
            this.wx.onVoiceRecordEnd({
                complete: (res) => {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    playVoice(config: { localId: string }): this {
        this.wx.playVoice({
            localId: config.localId // 需要播放的音频的本地ID，由stopRecord接口获得
        });
        return this;
    }

    pauseVoice(config: { localId: string }): this {
        this.wx.pauseVoice({
            localId: config.localId // 需要暂停的音频的本地ID，由stopRecord接口获得
        });
        return this;
    }

    stopVoice(config: { localId: string }): this {
        this.wx.stopVoice({
            localId: config.localId // 需要停止的音频的本地ID，由stopRecord接口获得
        });
        return this;
    }

    onVoicePlayEnd(): Observable<{ localId: string }> {
        return Observable.create(observer => {
            this.wx.onVoicePlayEnd({
                success: (res) => {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    uploadVoice(config: { localId: string, isShowProgressTips: 0 | 1 }): Observable<{ serverId: string }> {
        return Observable.create(observer => {
            this.wx.uploadVoice({
                localId: config.localId, // 需要上传的音频的本地ID，由stopRecord接口获得
                isShowProgressTips: config.isShowProgressTips, // 默认为1，显示进度提示
                success: (res) => {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    downloadVoice(config: { serverId: string, isShowProgressTips: 0 | 1 }): Observable<{ localId: string }> {
        return Observable.create(observer => {
            this.wx.downloadVoice({
                serverId: config.serverId, // 需要上传的音频的本地ID，由stopRecord接口获得
                isShowProgressTips: config.isShowProgressTips, // 默认为1，显示进度提示
                success: (res) => {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    translateVoice(config: { localId: string, isShowProgressTips: 0 | 1 }): Observable<{ translateResult: string }> {
        return Observable.create(observer => {
            this.wx.translateVoice({
                localId: config.localId, // 需要识别的音频的本地Id，由录音相关接口获得
                isShowProgressTips: config.isShowProgressTips, // 默认为1，显示进度提示
                success: (res) => {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    getNetworkType(): Observable<{ networkType: string }> {
        return Observable.create(observer => {
            this.wx.getNetworkType({
                success: (res) => {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    openLocation(config: { latitude: number, longitude: number, name: string, address: string, scale: number, infoUrl: string }): this {
        this.wx.openLocation({
            latitude: config.latitude, // 纬度，浮点数，范围为90 ~ -90
            longitude: config.longitude, // 经度，浮点数，范围为180 ~ -180。
            name: config.name, // 位置名
            address: config.address, // 地址详情说明
            scale: config.scale, // 地图缩放级别,整形值,范围从1~28。默认为最大
            infoUrl: config.infoUrl // 在查看位置界面底部显示的超链接,可点击跳转
        });
        return this;
    }

    getLocation(config: { type: string }): Observable<{ latitude: number, longitude: number, speed: number, accuracy: number }> {
        return Observable.create(observer => {
            this.wx.getLocation({
                type: config.type, // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                success: (res) => {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    startSearchBeacons(config: { ticket: string }): Observable<any> {
        return Observable.create(observer => {
            this.wx.startSearchBeacons({
                ticket: config.ticket,
                complete: (res) => {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    stopSearchBeacons(): Observable<any> {
        return Observable.create(observer => {
            this.wx.stopSearchBeacons({
                complete: (res) => {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    onSearchBeacons(): Observable<any> {
        return Observable.create(observer => {
            this.wx.onSearchBeacons({
                complete: (res) => {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    closeWindow(): this {
        this.wx.closeWindow();
        return this;
    }

    hideMenuItems(config: { menuList: string[] }): this {
        this.wx.hideMenuItems({
            menuList: config.menuList
        });
        return this;
    }

    showMenuItems(config: { menuList: string[] }): this {
        this.wx.showMenuItems({
            menuList: config.menuList
        });
        return this;
    }

    hideAllNonBaseMenuItem(): this {
        this.wx.hideAllNonBaseMenuItem();
        return this;
    }

    showAllNonBaseMenuItem(): this {
        this.wx.showAllNonBaseMenuItem();
        return this;
    }

    scanQRCode(config: { needResult: number, scanType: string[] }): Observable<{ resultStr: string }> {
        return Observable.create(observer => {
            this.wx.scanQRCode({
                needResult: config.needResult,
                scanType: config.scanType,
                success: (res) => {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    openProductSpecificView(config: { productId: string, viewType: string }): this {
        this.wx.openProductSpecificView({
            productId: config.productId, // 商品id
            viewType: config.viewType // 0.默认值，普通商品详情页1.扫一扫商品详情页2.小店商品详情页
        });
        return this;
    }

    chooseCard(config: WeixinChooseCardConfig): Observable<{ cardList: any[] }> {
        return Observable.create(observer => {
            this.wx.chooseCard({
                shopId: config.shopId, // 门店Id
                cardType: config.cardType, // 卡券类型
                cardId: config.cardId, // 卡券Id
                timestamp: config.timestamp, // 卡券签名时间戳
                nonceStr: config.nonceStr, // 卡券签名随机串
                signType: config.signType, // 签名方式，默认'SHA1'
                cardSign: config.cardSign, // 卡券签名
                success: (res) => {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    addCard(config: WeixinAddCardConfig): Observable<{ cardList: any[] }> {
        return Observable.create(observer => {
            this.wx.addCard({
                cardList: config.cardList,
                success: (res) => {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    openCard(config: WeixinOpenCardConfig): this {
        this.wx.openCard({
            cardList: config.cardList
        });
        return this;
    }

    chooseWXPay(config: WeixinPayConfig): Observable<any> {
        return Observable.create(observer => {
            this.wx.chooseWXPay({
                timestamp: config.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
                nonceStr: config.nonceStr, // 支付签名随机串，不长于 32 位
                package: config.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
                signType: config.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
                paySign: config.paySign, // 支付签名
                success: (res) => {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }

    openAddress(): Observable<WeixinAddress> {
        return Observable.create(observer => {
            this.wx.openAddress({
                success: (res) => {
                    observer.next(res);
                    observer.complete();
                }
            });
        });
    }
}