import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CoreUtilService} from "../../core-util.service";

import {RunnerUtilService} from "../../../runner-components/runner-util.service";
import {Router} from "@angular/router";

declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;

import { defaults,isPresent } from 'ionic-angular/util/util';

declare const require;
let store = require('store');

import { FormBuilder,FormGroup,FormControl,Validators,AbstractControl,ValidationErrors } from '@angular/forms';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Component({
  selector: 'core-forms',
  templateUrl: './core-forms.component.html',
  styleUrls: ['./core-forms.component.scss']
})
export class CoreFormsComponent implements OnInit {
  _code: string = '';
  @Input()
  set code(val: string){
    if(val){
      this._code = 'core.forms.'+val;
      this.form.get('code').setValue(this._code);
    }
  }

  _type: number = 0;
  @Input()
  set type(val: number){
    if(isPresent(val)){
      this._type = val;
      this.form.get('type').setValue(this._type);
    }
  }

  _end: any;
  @Input()
  set end(val: any){
    this._end = val;
    if(isPresent(this._end['lat'])){
      this.form.get('end').get('lat').setValue(this._end['lat']);
      this.form.get('end').get('lng').setValue(this._end['lng']);
      this.form.get('end').get('poiname').setValue(this._end['poiname']);
    }
  }

  _props: CoreFormsProps = {} as CoreFormsProps;

  @Input()
  set props(val: CoreFormsProps){
    this._props = val;
    this.defaults();
  }

  defaultOption: CoreFormsProps = CoreFormsDefaultProps;
  showRuleSetting: boolean = false;

  @Input() timeLen: number = 0;
  @Input() localId: string = '';

  @Input() post: any = {
    start: {},
    end: {},
    code: '',
    images: [],
    desc: '',
    time: {
      title: ''
    },
    baojia:{
      desc: ''
    },
    type: 0,
    total: 0,
    action: 'task'
  }

  total: number = 10;
  showAddressSelect: boolean = false;
  @Output() onChange: EventEmitter<any> = new EventEmitter();
  @Input() hasFooter: boolean = false;
  form: FormGroup;
  startFrom: FormControl;
  endForm: FormControl;

  canPost: boolean = true;
  constructor(
      public core: CoreUtilService,
      public util: RunnerUtilService,
      public router: Router,
      public fb: FormBuilder
  ) {
    // this.util.hideFooter()
    // this.defaults();

    this.form = this.fb.group({
      start: this.fb.group({
        detail: ['',Validators.required],
        mobile: ['',Validators.required],
        poiaddress: ['',Validators.required],
        poiname: ['',Validators.required],
        lat: ['',Validators.required],
        lng: ['',Validators.required],
      }),
      end: this.fb.group({
        detail: ['',Validators.required],
        mobile: ['',Validators.required],
        poiaddress: ['',Validators.required],
        poiname: ['',Validators.required],
        lat: ['',Validators.required],
        lng: ['',Validators.required]
      }),
      localId: '',
      timeLen: '',
      serverId: '',
      voice_time: 0,
      src: '',
      code: ['',Validators.required],
      images: [],
      steps: [], //路线规划
      desc: ['',Validators.required],
      time: {},
      time_value: ['',Validators.required],
      baojia: {},
      type: ['',Validators.required],
      total: ['',Validators.required],
      action: 'task',
      distance: 0,
      duration_value: ['',Validators.required],
      duration: 0,
      goods: ['',Validators.required],
      money: ['',Validators.required],
      price: ['',Validators.required],
      weight: ['',Validators.required],
      tiji: ['',Validators.required],
      priceItems: this.fb.group({
        time: this.fb.group({
          value: 0,
          money: 0,
          desc: ''
        }),
        juli: this.fb.group({
          value: 0,
          money: 0,
          desc: ''
        }),
        weight: this.fb.group({
          value: 0,
          money: 0,
          desc: ''
        }),
        baojia: this.fb.group({
          value: 0,
          money: 0,
          desc: ''
        }),
        money: this.fb.group({
          value: 0,
          money: 0,
          desc: ''
        }),
        price: this.fb.group({
          value: 0,
          money: 0,
          desc: ''
        }),
        tiji: this.fb.group({
          value: 0,
          money: 0,
          desc: ''
        }),
        tianqi: this.fb.group({
          value: 0,
          money: 0,
          desc: ''
        })
      }),
      priceSetting: {},
      juliJietiItems: [],
      weightItems: [],
      timeAddItem:  {},
    });
    const priceSetting = this.form.get('priceSetting');
    const priceSetting$ = priceSetting.valueChanges;
    priceSetting$.subscribe(res=>{
      this.priceSetting = res;
      
      /**
       * 当设置放生改变时,初始化数据
       */
      this.form.get('total').setValue('');
      this.form.get('money').setValue('');
      this.form.get('tiji').setValue('');
      this.form.get('weight').setValue('');
      this.form.get('time').setValue({});
      this.form.get('price').setValue('');
      //触发重新计算距离
      let distance = this.form.get('distance').value;
      this.form.get('distance').setValue(0); //先设置为0;
      this.form.get('distance').setValue(distance);



    });
    /**
     * 切换任务类型时
     */
    let code = this.form.get('code');
    let code$ = code.valueChanges;
    code$.subscribe(res=>{
      this.form.get('total').setValue(0);
      //当类型改变时
      this.getConfig(res);
    });

    /**
     * ---------------
     * 计算总价格
     * ---------------
     */
    const priceItems = this.form.get('priceItems');
    const priceItems$ = priceItems.valueChanges;
    
    priceItems$.debounceTime(300).subscribe(res=>{
      let total: any = 0;
      if(this.priceSetting.xcode && this.priceSetting.xcode.show){
        //如果是公式计费
        let xcode = this.priceSetting.xcode.setting;
        let distance = this.form.get('distance').value;
        
        if(distance == undefined || distance == null || distance == '' || distance <= 0){
          distance = 0
        }
        let tiji = this.form.get('tiji').value;
        if(tiji == undefined || tiji == null || tiji == '' || tiji <= 0){
          tiji = 0
        }
        let weight = this.form.get('weight').value;
        if(weight == undefined || weight == null || weight == '' || weight <= 0){
          weight = 0
        }
        xcode = xcode.replace('distance',distance);
        xcode = xcode.replace('distance',distance);
        xcode = xcode.replace('tiji',tiji);
        xcode = xcode.replace('tiji',tiji);
        xcode = xcode.replace('weight',weight);
        xcode = xcode.replace('weight',weight);
        total = eval(xcode);
        total = total.toFixed(2);
        this.form.get('total').setValue(total);

      }else{
        for(let key in res){
          total += Number(res[key].money);
        }
        total = total.toFixed(2);
        this.form.get('total').setValue(total);
      }
      this.changeTip();
    });

    this.form.valueChanges.debounceTime(300).subscribe(res=>{
      this._checkForms();
    })
    /**
     * ----------
     * 处理距离计费问题
     * ----------
     */
    // 任务起点
    const start = this.form.get('start');
    const start$ = start.valueChanges;

    // 任务终点
    const end = this.form.get('end');
    const end$ = end.valueChanges;

    //起点终点合并流
    let juliprice$ = Observable.combineLatest(start$,end$,(start,end)=>{
      // 计算距离
      return {start: start,end: end};
    });
    juliprice$.debounceTime(300).subscribe(res=>{
      this.canPost = false;
      this.getLen(res);
      this.changeTip();
    });

    //距离流
    const distance = this.form.get('distance');
    const distance$ = distance.valueChanges.map(res=>{
      return res > 0 ? Number(res).toFixed(2) : 0;
    });
    distance$.debounceTime(300).subscribe(res=>{
      let juliJietiItems = this.autoJuli(Number(res));
      this.form.get('juliJietiItems').setValue(juliJietiItems);
    });

    const juliJietiItems = this.form.get('juliJietiItems');
    const juliJietiItems$ = juliJietiItems.valueChanges;
    juliJietiItems$.debounceTime(100).subscribe(res=>{
      let price = 0;
      res.map(r=>{
        price += Number(r.money);
      });
      
      this.form.get('priceItems').get('juli').get('money').setValue(price);
      this.form.get('priceItems').get('juli').get('desc').setValue('路程总价'+price);
      this.form.get('priceItems').get('juli').get('value').setValue(this.form.get('distance').value);
    });

    /**
     * ----------
     * 保价信息流
     * ----------
     */
    const baojia = this.form.get('baojia');
    const baojia$ = baojia.valueChanges;

    baojia$.debounceTime(300).subscribe(res=>{
      let price = Number(res.money);
      this.form.get('priceItems').get('baojia').get('money').setValue(price);
      this.form.get('priceItems').get('baojia').get('desc').setValue(res.desc);
      this.form.get('priceItems').get('baojia').get('value').setValue(res.value);

      this.changeTip();
    });

    /**
     * ---------------------------
     * 时间变动时自动计算时间相关费用
     * ---------------------------
     */
    const time_value = this.form.get('time_value');
    const time_value$ = time_value.valueChanges;
    time_value$.subscribe(res=>{
      let timeItems = this.autoTime(res);
      this.form.get('timeAddItem').setValue(timeItems);
    });

    const timeAddItem = this.form.get('timeAddItem');
    const timeAddItem$ = timeAddItem.valueChanges;
    timeAddItem$.debounceTime(300).subscribe(res=>{
      let price = Number(res.price);
      this.form.get('priceItems').get('time').get('money').setValue(price);
      this.form.get('priceItems').get('time').get('desc').setValue('时间段加价:'+res.start+'-'+res.end);
      this.form.get('priceItems').get('time').get('value').setValue(time_value.value);
    });

    //合并流 距离/保价/时间/赏金/物品价格/物品重量/物品体积
    const money = this.form.get('money');
    const money$ = money.valueChanges.debounceTime(300).map(res=>{
      return res > 0 ? res : 0;
    });
    money$.subscribe(res=>{
      this.form.get('priceItems').get('money').get('money').setValue(res);
      this.form.get('priceItems').get('money').get('desc').setValue('赏金');
    });

    // 输入价格变化时
    const price = this.form.get('price');
    const price$ = price.valueChanges.map(res=>{
      return res >0 ? res : 0;
    });
    price$.debounceTime(300).subscribe(res=>{
      this.form.get('priceItems').get('price').get('money').setValue(res);
    });

    // 输入重量变化时
    const weight = this.form.get('weight');
    const weight$ = weight.valueChanges.map(res=>{
      return res > 0 ? res: 0;
    });

    weight$.debounceTime(300).subscribe(res=>{
      let weightItems = this.autoWeight(res);
      this.form.get('weightItems').setValue(weightItems);
    });

    const weightItems = this.form.get('weightItems');
    const weightItems$ = weightItems.valueChanges;
    weightItems$.debounceTime(300).subscribe(res=>{
      let price = 0;
      res.map(r=>{
        price += Number(r.money);
      });
      this.form.get('priceItems').get('weight').get('money').setValue(price);
      this.form.get('priceItems').get('weight').get('value').setValue(weight.value);
      this.form.get('priceItems').get('weight').get('desc').setValue('重量计费');
    })

    // 输入体积变化时
    const tiji = this.form.get('tiji');
    const tiji$ = tiji.valueChanges.map(res=>{
      return res > 0 ? res : 0;
    });
    tiji$.debounceTime(300).subscribe(res=>{
      this.form.get('priceItems').get('weight').get('value').setValue(tiji.value);    
    });
    const localId = this.form.get('localId');
    const localId$ = this.form.get('localId').valueChanges;

    localId$.debounceTime(300).subscribe(res=>{
      //上传语音
      let wx = window['wx'];
      wx.uploadVoice({
        localId: res, // 需要上传的音频的本地ID，由stopRecord接口获得
        isShowProgressTips: 1, // 默认为1，显示进度提示
        success: (res)=>{
          var serverId = res.serverId; // 返回音频的服务器端ID
          this.form.get('serverId').setValue(serverId);
        }
      });
    })


    // let total = Observable.combineLatest(
    //   start$,
    //   end$,
    //   baojia$,
    //   time_value$,
    //   money$,
    //   price$,
    //   weight$,
    //   tiji$,
    //   (start,end,baojia,time,money,price,weight,tiji)=>{
    //   return {start: start,end: end,baojia: baojia,time: time,money: money,price: price,weight: weight,tiji}
    // });

    // total.subscribe(res=>{
    //   console.log(this.form)
    // })
  }
  /**
   * ----------------
   * 表单变化处理
   * ----------------
   */
  //计算
  autoTime(myData: any){
    let timeAddItem = {
      price: 0
    }
    let Hour = myData.getHours();
    let minute = myData.getMinutes();
    let price = 0;
    this.priceSetting['timeItems'] && this.priceSetting['timeItems'].map(res=>{
      let start = res.start.split(':')
      let end = res.end.split(':')
      let startHour = parseInt(start[0])
      let startMinute = parseInt(start[1])

      let endHour = parseInt(end[0])
      let endMinute = parseInt(end[1])

      Hour = Number(Hour);
      minute = Number(minute);

      //小时小于
      if(Hour > startHour && Hour < endHour){
        if(res){
          timeAddItem = res;
        }
      }else if(Hour == startHour && Hour == endHour){
        if(minute >= startMinute && minute <= endMinute){
          if(res){
            timeAddItem = res;
          }
        }
      }else if(Hour < startHour || Hour > endHour){

      }else{
        if(minute >= startMinute){
          if(res){
            timeAddItem = res;
          }
        }
      }
    });
    return timeAddItem;
  }
  //计算距离
  juliJietiItems: any[] = []
  autoJuli(routeLen: number){
    this.juliJietiItems = [];
    this.juliJietiItems.push({
      start: 0,
      end: this.priceSetting.len,
      price: 0,
      money: this.priceSetting.start
    });
    if(routeLen > this.priceSetting.len){
      let len:any = Number(routeLen - this.priceSetting.len).toFixed(2)
      //超过距离 去查找应该匹配的单价
      let chazhi: number = routeLen;
      let price: any = 0;
      if(this.priceSetting['jieti']['juli_jieti']){
        if(this.priceSetting['juliItems']){
          this.priceSetting['juliItems'].map(res=>{
            res.start = Number(res.start)
            res.end = Number(res.end)
            if(res.end>0 && routeLen > res.start && routeLen <= res.end){
              //如果在区间内
              res['chazhi'] = routeLen - res.start;
              if(res['chazhi'] > 0){
                this.juliJietiItems.push({
                  start: res.start,
                  end: routeLen,
                  price: res.price,
                  money: Number(res['chazhi'] * res.price).toFixed(2)
                })
              }
            }else if(res.end> 0 && routeLen > res.start && routeLen > res.end) {
              res['chazhi'] = res.end - res.start;
              if(res['chazhi'] > 0){
                this.juliJietiItems.push({
                  start: res.start,
                  end: res.end,
                  price: res.price,
                  money: Number(res['chazhi'] * res.price).toFixed(2)
                })
              }
            }else if(!res.end && res.start>0 && routeLen > res.start){
              res['chazhi'] = routeLen - res.start;
              if(res['chazhi'] > 0){
                this.juliJietiItems.push({
                  start: res.start,
                  end: routeLen,
                  price: res.price,
                  money: Number(res['chazhi'] * res.price).toFixed(2)
                })
              }
            }
          })
        }
      }
      else if(this.priceSetting['jieti']['qujian_jifei']){
        if(this.priceSetting['juliItems']){
          this.priceSetting['juliItems'].map(res=>{
            res.start = Number(res.start);
            res.end = Number(res.end);
            if(routeLen >= res.start && (routeLen <= res.end || !res.end)){
              this.juliJietiItems[0] = {
                start: res.start,
                end: len,
                price: res.price,
                money: Number(res.price).toFixed(2)
              }
            }
          });
        }
      }
      else{
        //没有开
        if(this.priceSetting['juliItems']){
          let end = 0;
          this.priceSetting['juliItems'].map(res=>{
            res.start = Number(res.start)
            res.end = Number(res.end)
            if(res.end > 0 && routeLen > res.start && routeLen <= res.end){
              //大于他
              res['chazhi'] = routeLen - res.start;
              if(res['chazhi'] > 0){
                this.juliJietiItems[1] = {
                  start: res.start,
                  end: routeLen,
                  price: res.price,
                  money: Number((routeLen - this.priceSetting['len']) * res.price).toFixed(2)
                }
              }
            }else if(res.end>0 && routeLen > res.start && routeLen > res.end) {
              res['chazhi'] = routeLen - res.start;
              if(res['chazhi'] > 0){
                this.juliJietiItems[1] = {
                  start: res.start,
                  end: routeLen,
                  price: res.price,
                  money: Number((routeLen - this.priceSetting['len']) * res.price).toFixed(2)
                }
              }
            }else if(!res.end && res.start>0 && routeLen > res.start){
              res['chazhi'] = routeLen - res.start;
              if(res['chazhi'] > 0){
                this.juliJietiItems[1]={
                  start: res.start,
                  end: len,
                  price: res.price,
                  money: Number( (routeLen - this.priceSetting['len']) * res.price).toFixed(2)
                }
              }
            }
          })
        }
      }
    }
    return this.juliJietiItems;
  }
  //重量计费
  weightItems: any[] = []
  autoWeight(weight: number){
    this.weightItems = [];
    let len = weight;
    let chazhi: number = weight;
    let price: any = 0;
    if(this.priceSetting['jieti']['weight_jieti']){
      if(this.priceSetting['weightItems']){
        this.priceSetting['weightItems'].map(res=>{
          res.start = Number(res.start)
          res.end = Number(res.end)
          if(res.end>0&&len > res.start && len <= res.end){
            //如果在区间内
            res['chazhi'] =len - res.start;
            if(res['chazhi'] > 0){
              this.weightItems.push({
                start: res.start,
                end: len,
                price: res.price,
                money: Number(res['chazhi'] * res.price).toFixed(2)
              })
            }
          }else if(res.end>0&&len > res.start && len > res.end) {
            res['chazhi'] = res.end - res.start;
            if(res['chazhi'] > 0){
              this.weightItems.push({
                start: res.start,
                end: res.end,
                price: res.price,
                money: Number(res['chazhi'] * res.price).toFixed(2)
              })
            }
          }else if(!res.end && res.start>0 && len > res.start){
            res['chazhi'] = len - res.start;
            if(res['chazhi'] > 0){
              this.weightItems.push({
                start: res.start,
                end: len,
                price: res.price,
                money: Number(res['chazhi'] * res.price).toFixed(2)
              })
            }
          }
        })
      }
    }
    else if(this.priceSetting['jieti']['qujian_jifei']){
      if(this.priceSetting['weightItems']){
        this.priceSetting['weightItems'].map(res=>{
          res.start = Number(res.start);
          res.end = Number(res.end);
          if(len >= res.start && (len <= res.end || !res.end) ){
            this.weightItems.push({
              start: res.start,
              end: res.end,
              price: res.price,
              money: Number(res.price).toFixed(2)
            })
          }
        });
      }
    }
    else{
      if(this.priceSetting['weightItems']){
        let end = 0;
        this.priceSetting['weightItems'].map(res=>{
          res.start = Number(res.start)
          res.end = Number(res.end)
          if(res.end>0&&len > res.start && len <= res.end){
            //大于他
            res['chazhi'] = len - res.start;
            if(res['chazhi'] > 0){
              this.weightItems[0] = {
                start: res.start,
                end: len,
                price: res.price,
                money: Number(len * res.price).toFixed(2)
              }
            }
          }else if(res.end > 0 && len > res.start && len > res.end) {
            res['chazhi'] = len - res.start;
            if(res['chazhi'] > 0){
              this.weightItems[0] = {
                start: res.start,
                end: len,
                price: res.price,
                money: Number(len * res.price).toFixed(2)
              }
            }
          }else if(!res.end && res.start>0 && len > res.start){
            res['chazhi'] = len - res.start;
            if(res['chazhi'] > 0){
              this.weightItems[0] ={
                start: res.start,
                end: len,
                price: res.price,
                money: Number(len * res.price).toFixed(2)
              }
            }
          }
        })
      }
    }
    return this.weightItems;
  }

  // 选择保价
  onSelectBaojia(e: any){
    this.post['baojia'] = e;
    this.form.get('baojia').setValue(e);
  }
  //选择 tag
  onGoodsSelect(e: any){
    this.form.get('goods').setValue(e.title);
    this.changeTip();
  }
  //选择地址
  onSelectAddress(e: any){
    this.showAddressSelect = false;
    if(this.isStart){
      if(isPresent(e.lat)){
        this.form.get('start').get('lat').setValue(e.lat);
      }
      if(isPresent(e.lng)){
        this.form.get('start').get('lng').setValue(e.lng);
      }
      if(isPresent(e.poiname)){
        this.form.get('start').get('poiname').setValue(e.poiname);
      }
      if(isPresent(e.poiaddress)){
        this.form.get('start').get('poiaddress').setValue(e.poiaddress);
      }
      if(isPresent(e.detail)){
        this.form.get('start').get('detail').setValue(e.detail);
      }
      if(isPresent(e.mobile)){
        this.form.get('start').get('mobile').setValue(e.mobile);
      }
      // this.form.get('start').setValue(e);
    }else{
      if(isPresent(e.lat)){
        this.form.get('end').get('lat').setValue(e.lat);
      }
      if(isPresent(e.lng)){
        this.form.get('end').get('lng').setValue(e.lng);
      }
      if(isPresent(e.poiname)){
        this.form.get('end').get('poiname').setValue(e.poiname);
      }
      if(isPresent(e.poiaddress)){
        this.form.get('end').get('poiaddress').setValue(e.poiaddress);
      }
      if(isPresent(e.detail)){
        this.form.get('end').get('detail').setValue(e.detail);
      }
      if(isPresent(e.mobile)){
        this.form.get('end').get('mobile').setValue(e.mobile);
      }
      // this.form.get('end').setValue(e);
    }
  }
  //上传图片
  onUpload(e: any){
    this.form.get('images').setValue(e);
  }

  // 录音
  onRecord(e: any){
    this.form.get('localId').setValue(e.localId);
    this.form.get('timeLen').setValue(e.time);
    this.form.get('voice_time').setValue(e.time);
    this.localId = e.localId;
    this.timeLen = e.time
  }

  /**
   * ---------------------
   * 页面初始化
   * ---------------------
   */

  ngOnInit() {
    this.defaults();
    this.util.hideFooter();
  }
  // 默认配置
  defaults(){
    this._props = Object.assign(this.defaultOption,this._props);
    this._props.setting = Object.assign(this.defaultOption.setting,this._props.setting);
    this._props.start = Object.assign(this.defaultOption.start,this._props.start);
    if(!isPresent(this._props.start['default'])){
      this._props.start['default'] = '';
    }
    this._props.start.mobile = Object.assign(this.defaultOption.start.mobile,this._props.start.mobile);
    this._props.start.detail = Object.assign(this.defaultOption.start.detail,this._props.start.detail);
    this._props.end = Object.assign(this.defaultOption.end,this._props.end);
    if(!isPresent(this._props.end['default'])){
      this._props.end['default'] = '';
    }
    this._props.end.mobile = Object.assign(this.defaultOption.end.mobile,this._props.end.mobile);
    this._props.end.detail = Object.assign(this.defaultOption.end.detail,this._props.end.detail);
    //初始化验证
    // this.form.clearValidators();
    // this.form.get('start').setAsyncValidators();
    this.priceSetting = this._props.setting;
  }
  isValid: boolean = false;
  _checkForms(hasTip: boolean = false){
    //检查开始地址
    let result = true;
    if(this._props.start.required){
      // 开始地址电话
      if(this._props.start.mobile.required){
        if(!this.form.get('start.mobile').valid){
          result = false;
          if(hasTip){
            toast(this._props.start.mobile.placeholder);
            return false;            
          }
        }
      }
      // 开始地址详情
      if(this._props.start.detail.required){
        if(!this.form.get('start.detail').valid){
          result = false;
          if(hasTip){
            toast(this._props.start.detail.placeholder);
            return false;
          }
        }
      }
    }
    //目的地
    if(this._props.end.required){
      // 开始地址电话
      if(this._props.end.mobile.required){
        if(!this.form.get('end.mobile').valid){
          result = false;
          if(hasTip){
            toast(this._props.end.mobile.placeholder);
            return false;
          }
        }
      }
      // 开始地址详情
      if(this._props.end.detail.required){
        if(!this.form.get('end.detail').valid){
          result = false;
          if(hasTip){
            toast(this._props.end.detail.placeholder);
            return false;
          }
        }
      }
    }

    if(this._props.msg.required){
      // 简介
      if(!this.form.get('desc').valid){
        result = false;
        if(hasTip){
          toast(this._props.msg.placeholder);
          return false;
        }
      }
    }

    if(this._props.money.required){
      // 赏金
      if(!this.form.get('money').valid){
        result = false;
        if(hasTip){
          toast(this._props.money.placeholder);
          return false;
        }
      }
    }

    if(this._props.weight.required){
      // 重量
      if(!this.form.get('weight').valid){
        result = false;
        if(hasTip){
          toast(this._props.weight.placeholder);
          return false;
        }
      }
    }

    if(this._props.price.required){
      // 价格
      if(!this.form.get('price').valid){
        result = false;
        if(hasTip){
          toast(this._props.price.placeholder);
          return false;
        }
      }
    }

    if(this._props.tiji.required){
      // 价格
      if(!this.form.get('tiji').valid){
        result = false;
        if(hasTip){
          toast(this._props.tiji.placeholder);
          return false;
        }
      }
    }

    if(this._props.time.required){
      if(!this.form.get('time').valid){
        result = false;
        if(hasTip){
          toast(this._props.time.placeholder);
          return false;
        }
      }
    }

    this.isValid = result;
    return this.isValid;
  }
  /**
   * 获取价格设置
   * @param code 任务类型 
   */
  getConfig(code: string){
    this.core.post('setting.get',{code: code}).subscribe(res=>{
      if(res.code == 1){
        this._props = res.info;
        //
        this.defaults();
      }else{
        this.defaults();
      }
      this.form.get('priceSetting').setValue(this._props.setting);
      this.form.get('time_value').setValue(new Date());      
    })
  }

  /**
   * ---------------------
   * 用户交互逻辑
   * ---------------------
   */

   /**
    * 地址选择交互
    */
  isStart: boolean = false;

  sendAddress(){
    this.isStart = true;
    this.showAddressSelect = true;
  }
  reciveAddress(){
    this.isStart = false;
    this.showAddressSelect = true;
  }

   /**
    * 点击查看计价规则交互
    */
  showPriceDetail: boolean = false;
  openPriceRule(){
    this.showPriceDetail = !this.showPriceDetail;
  }
  /**
   * 价格表单设置
   */
  onSaveRuleSetting(){
    this.showRuleSetting = false;
  }
  showRule(){
    this.showRuleSetting = true;
  }


  /**
   * ------------------
   * 功能处理
   * ------------------
   */
  
   /**
    * 自动计算距离
    */
  routeLen: number = 0;
  priceSetting: any = {};
  duration_value: number = 0;
  duration: string = '';
  region: string = '';
  getLen(res: any){
    let mylocation = store.get('mylocation')
    this.region = mylocation.city;
    this.post['region'] = this.region;
    this.post['action'] = 'driving';
    res.start.lat = Number(res.start.lat).toFixed(2);
    res.start.lng = Number(res.start.lng).toFixed(2);
    res.end.lat = Number(res.end.lat).toFixed(2);
    res.end.lng = Number(res.end.lng).toFixed(2);
    this.core.post('bmap.road',res).subscribe(res=>{
      if(res.code == 1){
        if(res.info.result){
          let result = res.info.result;
          if(result.routes && result.routes.length>0){
            let route = result.routes[0];
            //时间
            // this.form.get('duration_value').setValue(route.duration);
            this.form.get('steps').setValue(route.steps);

            this.routeLen = Number(route.distance/ 1000);
            this.routeLen = Number(this.routeLen.toFixed(2))
            // this.post['distance'] = this.routeLen;
            this.form.get('distance').setValue(this.routeLen); //路程

            this.duration_value = this.priceSetting.duration + Math.floor(route.duration / 60);
            this.form.get('duration_value').setValue(this.duration_value);  //时间值

            let hour: any = Math.floor(this.duration_value / 60);
            this.duration =  hour >  0 ? hour + '小时' + Math.floor(this.duration_value % 60)+'分钟' : Math.floor(this.duration_value % 60)+'分钟';
            // this.post['duration'] = this.duration;
            this.form.get('duration').setValue(this.duration);
            this.canPost = true;
          }
        }
        this.changeTip();
      }
    })
  }

  changeTip(){
    this._props.priceStr = '';
    if(this.form.get('goods').valid){
      this._props.priceStr += this.form.get('goods').value + ','
    }
    if(this.form.get('duration').valid){
      this._props.priceStr += '预计时间:'+this.form.get('duration').value+','
    }
    if(this.form.get('time').value['title']){
      this._props.priceStr += '预约: '+ this.form.get('time').value['title']+','
    }
    if(this.form.get('baojia').value['title']){
      this._props.priceStr += ''+this.form.get('baojia').value['title']+','
    }
    if(this.form.get('total').valid){
      this._props.priceStr += '总费用:'+this.form.get('total').value+'元'
    }
    if(this.form.get('end').valid){
      this._props.priceStr += '请检查: ' + this._props.end.title+'是否填写完整';
    }
    if(!this.canPost){
      this._props.priceStr += '正在计算总路程,请稍后...';
    }
  }
  

  /**
   * 数据展示
   */

  //时间选择
  timeCtrl: any;
  showBg: boolean = false;
  openTimeSelect: boolean = false;
  onTimeInit(e: any){
    this.timeCtrl = e;
  }
  timeValue: any = new Date();
  onTimeSelect(e: any){
    let value = e.value;
    value = value.replace(/年/g,'-');
    value = value.replace(/月/g,'-');
    value = value.replace(/日/g,'');
    this.timeValue = new Date(value);
    this.form.get('time').setValue(e);
    this.form.get('time_value').setValue(this.timeValue);
    this.onBg()
  }
  timeSelect(){
    this.openTimeSelect = true;
    this.showBg = true;
    this.timeCtrl.show();
  }
  //时间选择

  onBg(){

  }

  onPaySuccess(e: any){
    this.core.post('paylog.qunfa',{id: e}).subscribe(res=>{
      if(res.code == 1){}
    });
    this.router.navigate(['/','core','detail',e])
  }
  createOrder: boolean = false;
  wx: any = window['wx']
  serverId: string = '';
  onPay(){
    let ispass = this._checkForms(true);
    if(!ispass){
      return '';
    }
    this.createOrder = false;
    setTimeout(()=>{
      this.createOrder = true;
    },300)
  }
}


export interface CoreInput{
  title?: string,
  placeholder?: string,
  default?: string,
  required?: boolean
}

export interface CoreAddressProps{
  show?: boolean,
  title?: string,
  placeholder?: string,
  detail?: CoreInput,
  mobile?:CoreInput,
  default?: string,
  required?: boolean
}

export interface CoreTitleProps{
  title?: string,
  show?: boolean,
  placeholder?: string,
  empty?: string,
  warning?: string,
  content?: string,
  required?: boolean
}

export interface CorePriceSettingJietiProps{
  show: boolean,
  juli_jieti: boolean,
  weight_jieti: boolean,
  qujian_jifei: boolean
}

export interface CorePriceSettingProps{
  start: number, //起步价
  len: number, //起步距离
  duration: number, //配送时间
  jieti: CorePriceSettingJietiProps, //阶梯计费
  tianqiItems: any[],
  juliItems: any[],
  weightItems: any[],
  timeItems: any[],
  xcode: any
}

export interface CoreFormsProps{
  adv?: CoreTitleProps,
  gonggao?: CoreTitleProps,
  btnTitle?: string,
  priceStr?: string,
  start?: CoreAddressProps,
  end?: CoreAddressProps,
  msg?: CoreTitleProps,
  voice?: CoreTitleProps,
  image?: CoreTitleProps,
  baojia?: CoreTitleProps,
  weight?: CoreTitleProps,
  price?: CoreTitleProps,
  rule?: CoreTitleProps,
  time?: CoreTitleProps,
  money?: CoreTitleProps,
  setting: CorePriceSettingProps,
  tiji: CoreTitleProps
}

export const CoreFormsDefaultProps = {
  btnTitle: '下一步',
  priceStr: '计价规则[请选择目的地]',
  start: {
    show: true,
    title: '发货地',
    placeholder: '请选择发货地',
    default: '',
    detail: {
      title: '详细地址',
      placeholder: '如:楼层门牌号等',
      default: '未填写',
      required: false
    },
    mobile: {
      title: '联系电话',
      placeholder: '请输入联系电话',
      default: '未填写',
      required: false
    }
  },
  end: {
    show: true,
    title: '收货地',
    placeholder: '请选择收货地',
    default: '',
    detail: {
      title: '详细地址',
      placeholder: '如:楼层门牌号等',
      default: '未填写',
      required: false
    },
    mobile: {
      title: '联系电话',
      placeholder: '请输入联系电话',
      default: '未填写',
      required: false
    }
  },
  msg: {
    show: true,
    title: '留言信息',
    placeholder: '请输入留言信息',
    default: '未填写',
    required: false
  },
  adv: {
    show: true
  },
  gonggao: {
    show: true
  },
  voice: {
    show: true,
    title: '语音留言',
    placeholder: '点击录音',
    required: false
  },
  image: {
    show: true,
    title: '任务附件',
    placeholder: '',
    max: 6,
    required: false
  },
  baojia: {
    show: true,
    title: '物品保价',
    warning: '请选择物品保价',
    required: false
  },
  weight: {
    show: true,
    title: '物品重量',
    placeholder: '请输入物品重量',
    required: false
  },
  price: {
    show: true,
    title: '物品价格',
    placeholder: '请输入物品价格',
    warning: '请输入物品重量',
    required: false
  },
  rule: {
    show: true,
    title: '发布条例,免责声明',
    placeholder: '阅读并同意',
    warning: '您必须同意发布条例',
    content: '',
    required: true
  },
  time: {
    show: true,
    title: '预约时间',
    placeholder: '请选择预约时间',
    required: false
  },
  money: {
    show: true,
    title: '赏金',
    placeholder: '请输入赏金',
    required: false
  },
  setting: {
    start: 10, //起步价
    len: 5, //起步距离
    duration: 30, //配送时间
    jieti: {
      show: false,
      juli_jieti: false,
      weight_jieti: false,
      qujian_jifei: false
    }, //阶梯计费
    tianqiItems: [],
    juliItems: [],
    weightItems: [],
    timeItems: [],
    xcode: {
      show: false,
      setting: 'x * ( 2 * (0.5787 + 0.06 * 10) * 12 + 3 * 10)'
    }
  },
  tiji: {
    show: true,
    title: '体积',
    placeholder: '请输入体积',
    required: false
  }
}

export class NewValidators extends Validators{
  static required(control: AbstractControl): ValidationErrors|null {
    return isEmptyInputValue(control.value) ? {'required': true} : null;
  }
}

function isEmptyInputValue(value: any): boolean {
  // we don't check for string here so it also works with arrays
  return value == null || value.length === 0;
}