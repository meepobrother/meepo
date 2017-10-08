import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

const esc = encodeURIComponent;

export interface Segment{
    j?:string;
    i?:string;
    c?:string;
    a?:string;
    do?:string;
}

export interface Params{
    [key:string]:string
}
// 前台地址
export function murl(segment: Segment,params: Params){
    let url = `./index.php?`;
    var query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
    return url+'&'+query;
}
// 后台地址
export function wurl(segment: Segment,params: Params){
    let url = `./index.php?`;
    var query = Object.keys(params)
        .map(k => esc(k) + '=' + esc(params[k]))
        .join('&');
    return url+'&'+query;
}
// 基础类
export abstract class WeBase{
    uniacid: string = '1';
    domain: string = 'http://192.168.33.10/';
    constructor(
        public http: HttpClient,
        public modulename: string
    ){}

    setUniacid(uniacid: string){
        this.uniacid = uniacid;
        return this;
    }

    setModuleName(modulename: string){
        this.modulename = modulename;
        return this;
    }
    /**
     * saveSettings
     * 保存配置
     */
    saveSettings(setting: any){
        let url = this.createMobileUrl('setting');
        return this.http.post('',setting);
    }
    /**
     * createMobileUrl
     * 创建mobile连接
     * @param _do 
     * @param query 
     * @param noredirect 
     */
    createMobileUrl(_do: string, query:Params = {}){
        query['do'] = _do;
        query['m'] = this.modulename;
        query['i'] = this.uniacid;

        let segment: Segment = {
            c: 'entry'
        };
        query = {...query,...segment}
        
        return this.domain + 'app/' +murl({},query);
    }
    /**
     * createWebUrl
     * 创建web连接
     * @param _do 
     * @param query 
     */
    createWebUrl(_do: string, query: Params={}){
        query['do'] = _do;
        query['m'] = this.modulename;
        let segment: Segment = {
            c: 'site',
            a: 'entry'
        };
        query = {...query,...segment}
        return this.domain + 'web/' + wurl({},query);
    }
}

