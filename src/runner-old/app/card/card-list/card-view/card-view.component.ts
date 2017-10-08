import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent implements OnInit {

  base_info: any =  {}
  advanced_info: any = {}
  especial: any = {}
  card_type: string = '';

  member_number: string = '0268 8888 8888';

  constructor() {
    this.card_type = 'MEMBER_CARD';
    this.base_info = {
      logo_url: 'http://mmbiz.qpic.cn/mmbiz/iaL1LJM1mF9aRKPZ/0',
      brand_name: '米波网络科技',
      title: '小明跑腿会员卡',
      color: {
        type: 'Color010',
        value: '#55BD47'
      },
      pay_info: {},
      swipe_card: {},
      is_swipe_card: true,
      is_pay_and_qrcode: true,
      notice: '使用时向服务员出示此券',
      service_phone: '020-88888888',
      center_title: '立即下单',
      center_sub_title: '下单立享9折优惠,还有积分相送',
      center_url: '/runner/post/index',
      custom_url: '/card/recharge',
      custom_url_name: '积分兑换礼品',
      custom_url_sub_title: '立即兑换',
      promotion_url: '/card/log',
      promotion_url_name: '我的礼品',
      promotion_url_sub_title: '',
      get_limit: 1,
      can_share: true,
      can_give_friend: true,
      need_push_on_view: true,
      sku: {},
      quantity: 1000,
      date_info: {},
      type: 'DATE_TYPE_PERMANENT',
      begin_timestamp: '',
      end_timestamp: '',
      fixed_term: 0,
      fixed_begin_term: 0,
      use_custom_code: '',
      bind_openid: false,
      location_id_list: {},
      use_all_locations: true,
    }

    this.especial = {
      discount: 10,
      max_reduce_bonus: 10,
      least_money_to_use_bonus: 100,
      reduce_money: 10,
      cost_bonus_unit: 5,
      init_increase_bonus: 10,
      max_increase_bonus: 100,
      increase_bonus: 10,
      cost_money_unit: 10,
      bonus_rule: {},
      url: '',
      tips: '',
      name: '',
      custom_cell1: {},
      activate_app_brand_pass: '',
      activate_app_brand_user_name: '',
      activate_url: '',
      balance_rules: '',
      bonus_rules: '',
      bonus_cleared: '',
      name_type: '',
      custom_field1: {},
      custom_field2: {},
      custom_field3: {},
      balance_url: '',
      supply_balance: true,
      bonus_url: '',
      supply_bonus: true,
      wx_activate: true,
      auto_activate: true,
      prerogative: '',
      background_pic_url: ''
    }

    this.advanced_info = {
      advanced_info: {},
      use_condition: {},
      accept_category: '',
      reject_category: '',
      least_cost: 0,
      object_use_for: '',
      can_use_with_other_discount: true,
      abstract: {},
      icon_url_list: '',
      text_image_list: {},
      image_url: '',
      text: '',
      business_service: [],
      time_limit: {},
      type: '',
      begin_hour: 10,
      begin_minute: 10,
      end_hour: 10,
      end_minute: ''
    }
  }

  ngOnInit() {
  }
}
