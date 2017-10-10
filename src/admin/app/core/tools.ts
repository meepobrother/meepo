import { Observable } from 'rxjs/Observable';

/**
 * 清理微信hash
 * @param url 
 */
export function clearWeixinHash(url: string) {
    let index: number;
    if (!url) {
        return;
    }
    if (url.indexOf('weixin.qq.com') >= 0) {
        index = url.indexOf('#');
        index >= 0 && (url = url.substr(0, index));
    }
    return url;
}

export function isEmptyObject(obj: any) {
    for (var name in obj) {
        return false;
    }
    return true;
}


export function getTimeStr(para) {
    var now = para ? new Date(para) : new Date(),
        year = now.getFullYear(), //年
        month = now.getMonth() + 1, //月
        day = now.getDate(), //日
        hh = now.getHours(), //时
        mm = now.getMinutes(), //分
        clock = year + "-";

    if (month < 10)
        clock += "0";

    clock += month + "-";

    if (day < 10)
        clock += "0";

    clock += day + " ";

    if (hh < 10)
        clock += "0";

    clock += hh + ":";
    if (mm < 10)
        clock += '0';
    clock += mm;

    return (clock);
}


