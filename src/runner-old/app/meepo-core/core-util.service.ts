import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
declare const require;
let URLSearchParams = require('url-search-params');
import {Observable} from "rxjs/Observable";
let Base64 = require('js-base64').Base64;

@Injectable()
export class CoreUtilService {
  search: any = location.search;
  uRLSearchParams: URLSearchParams = new URLSearchParams(this.search);
  i: string = this.uRLSearchParams.get('i')
  domain: string = window['hostname'];
  pathname: string = window['location']['pathname'];
  headers: Headers = new Headers();
  dev: string = this.uRLSearchParams.get('dev');

  m: string = this.uRLSearchParams.get('m');
  do: string = this.uRLSearchParams.get('do');
  id: string = this.uRLSearchParams.get('id');

  constructor(
      public http: Http
  ) {
    this.i = this.i || window['uniacid'];
    this.headers.append("Content-Type", "application/x-www-form-urlencoded")
    this.pathname = this.pathname.replace('/app/index.php','');
    let version = this.dev ? this.dev : window['version'];
    if(version == 'develement'){
      this.dev = this.dev || 'develement';
    }else{
      this.dev = this.dev || 'prod';
    }
    if(this.dev == 'develement'){
      this.domain = window['hostname']+this.pathname;
    }else{
      this.domain = `${location.protocol}//${location.hostname}${this.pathname}`
    }
  }

  createOpen(s: string,m: string){
    let url = `${this.domain}/app/index.php?i=${this.i}&c=entry&do=open&m=${m}&__do=${s}`;
    return url;
  }

  createSocket(s: string,m: string){
    let url = `${this.domain}/app/index.php?i=${this.i}&c=entry&do=socket&m=${m}&__do=${s}`;
    return url;
  }
  get(s: string,m: string = 'imeepos_runner'){
    let url = `${this.domain}/app/index.php?i=${this.i}&c=entry&do=open&m=${m}&__do=${s}`;
    return Observable.create(re=>{
      this.http.get(url,{headers: this.headers}).map(res=>res.json()).subscribe(res=>{
        re.next(res)
        re.complete();
      },(e)=>{
        re.error(e)
      },()=>{
        re.complete()
      })
    })
  }

  post(s: string, post: any, module: string = 'imeepos_runner'){
    post = post ? post : {msg: 'welcome to imeepos'}
    let d = JSON.stringify(post);
    let encrypted = Base64.encode(d);
    let url = `${this.domain}/app/index.php?i=${this.i}&c=entry&do=open&m=${module}&__do=${s}`;
    return Observable.create(re=>{
      this.http.post(url,{encrypted: encrypted},{headers: this.headers}).map(res=>res.json()).subscribe(res=>{
        //解密
        re.next(res)
        re.complete();
      },(e)=>{
        re.error(e)
      },()=>{
        re.complete()
      })
    })
  }

  uploadImage(limit: number){
    return Observable.create(o=>{
      let wx = window['wx'];
      wx.ready(()=>{
        wx.chooseImage({
          count: limit, // 默认9
          sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
          success: (res)=>{
            res.localIds.map(r=>{
              wx.uploadImage({
                localId: r, // 需要上传的图片的本地ID，由chooseImage接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success: (res)=> {
                  let serverId = res.serverId; // 返回图片的服务器端ID
                  this.post('audio.image',{serverId: serverId}).subscribe(res=>{
                    let img = res.info
                    o.next(img)
                    o.complete();
                  })
                }
              });
            })
          }
        })
      })
    })
  }

}
