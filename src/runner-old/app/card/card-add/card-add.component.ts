import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suyun-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.scss']
})
export class CardAddComponent implements OnInit {
  items: any[] = []
  base_info: any = {}
  constructor() {
    this.items = [
      {
        title: '基本信息',
        active: true,
        code: 'base_info'
      },
      {
        title: '会员卡详情',
        code: 'detail'
      },
      {
        title: '商户介绍',
        code: 'shop'
      },
      {
        title: '使用设置',
        code: 'used'
      }
    ]
    this.items.map(res=>{
      if(res['active']){
        this.onSelect(res)
      }
    })
    this.base_info = {
      logo_url: 'http://mmbiz.qpic.cn/mmbiz/iaL1LJM1mF9aRKPZ/0',
      brand_name: '海底捞',
      title: '海底捞会员卡',
      color: '#55BD47',
      pay_info: {},
      swipe_card: {},
      is_swipe_card: true,
      is_pay_and_qrcode: true,
      notice: '使用时向服务员出示此券',
      service_phone: '020-88888888',
      center_title: '快速买单',
      center_sub_title: '买单立享9折优惠,还有积分相送',
      center_url: '',
      custom_url: '',
      custom_url_name: '同城服务',
      custom_url_sub_title: '立即查看',
      promotion_url: '',
      promotion_url_name: '小明跑腿',
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
  }

  onColorSelect(e: any){
    this.base_info.color = e;
  }
  activeItem: any = {}
  onSelect(e: any){
    this.activeItem = e;
  }

  usedItems: any[] = [
    {
      title: '帮我买',
      active: true
    },
    {
      title: '帮我送',
      active: true
    },
    {
      title: '帮帮忙',
      active: true
    }
  ]

  ngOnInit() {
  }

}
