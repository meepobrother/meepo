import {Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2} from '@angular/core';
import {CorePageComponent} from "../../core-share/core-page/core-page.component";
// import {routeAnim} from "../../core-animates/router.anim";

import {CoreUtilService} from "../../core-util.service";
import { defaults,isPresent } from 'ionic-angular/util/util';

// declare const require;
// declare const Zepto;
// let $ = Zepto;

@Component({
  selector: 'core-forms-rule',
  templateUrl: './core-forms-rule.component.html',
  styleUrls: ['./core-forms-rule.component.scss']
})
export class CoreFormsRuleComponent extends CorePageComponent implements OnInit {

  _code: string = '';
  @Output() onSave: EventEmitter<any> = new EventEmitter()
  @Input()
  set code(val: string){
    if(val){
      this._code = val;
      this.getConfig()
    }
  }
  _props: CoreFormsProps = {} as CoreFormsProps;
  @Input()
  set props(val: CoreFormsProps){
    this._props = val;
    this.defaults();
    // this._props = $.extend(true,this.defaultOption,this._props)
    // console.log('setting',this._props.setting);
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
  }

  defaultOption: CoreFormsProps = CoreFormsDefaultProps;
  topNavs: any[] = []
  constructor(
      public ele: ElementRef,
      public render: Renderer2,
      public core: CoreUtilService
  ) {
    super(ele,render)
    this.render.setStyle(this.ele.nativeElement,'z-index','99')
    this.render.setStyle(this.ele.nativeElement,'overflow','scroll')
    // this._props = _.assign(this._props,this.defaultOption)
    this.topNavs = [
      {
        title: '基础设置',
        active: false,
        code: 'baseRule'
      },
      {
        title: '表单设置',
        active: true,
        code: 'formRule'
      },
      {
        title: '价格设置',
        active: false,
        code: 'priceRule'
      }
    ]
  }
  topNavCode: string = 'formRule';
  onTopItem(e: any){
    this.topNavCode = e.code;
  }

  ngOnInit() {
    this.defaults();
    // this._props = $.extend(true,this.defaultOption,this._props)
  }

  getConfig(){
    this.core.post('setting.get',{code: this._code}).subscribe(res=>{
      if(res.code == 1){
        this._props = res.info;
        this.defaults();
        // this._props = $.extend(true,this.defaultOption,this._props)
        this.check('imeepos_runner_plugin_jieti');
        this.check('imeepos_runner_plugin_xcode');
      }
    })
  }

  check(m: string){
    this.core.post('setting.get',{code:m}).subscribe(res=>{
      if(res.code == 1){
        if(res.info.status == 1){
          if(m == 'imeepos_runner_plugin_jieti'){
            this._props.setting.jieti.show = true;
          }
          if(m == 'imeepos_runner_plugin_xcode'){
            this.topNavs.push({
              title: '公式计费',
              active: false,
              code: 'xcode'
            })
          }
        }
      }
    })
  }

  switchOpen(item: any){
    item['open'] = !item['open']
  }

  onSaveSetting(e: any){
    this._props.setting = e;
  }

  save(){
    this.core.post('setting.save',{code: this._code,data: this._props}).subscribe(res=>{
      this.onSave.emit('save')
    })
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
  content?: string
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