import {Component, Input, OnInit} from '@angular/core';
import {SettingService, TopicsService} from "services-components";
import weui from 'weui.js'
import {Router} from "@angular/router";

@Component({
  selector: 'suyun-bbs-post',
  templateUrl: './bbs-post.component.html',
  styleUrls: ['./bbs-post.component.scss']
})
export class BbsPostComponent implements OnInit {
  @Input() post: any = {
    title: '',
    content: '',
    images: [],
    total: 5,
    goods: []
  }
  emojis: any[] = [];
  navs: any[] = []

  constructor(
    public topic: TopicsService,
    public router: Router,
    public setting: SettingService
  ) {
    this.navs = [
      {
        title: '商品',
        icon: 'icon-post-section',
        code: 'goods'
      },
      {
        title:'表情',
        icon: 'icon-post-expression',
        code: 'emoji'
      },
      {
        title: '图片',
        icon: 'icon-post-pic',
        code: 'images'
      },
      {
        title: '语音',
        icon: 'icon-post-voice',
        code: 'voice'
      },
      {
        title: '视频',
        icon: 'icon-post-video',
        code: 'video'
      },
      {
        title: '红包',
        icon: 'icon-post-reward',
        code: 'reward'
      }
    ]
    this.initEmoji();
  }

  onEmoji(e: any){
    this.post['content'] += `[${e.title}]`
  }

  initEmoji(){
    let emojis: any[] = [];
    for(let i=0;i<4;i++){
      let emoj: any = [];
      for(let j=0;j<24;j++){
        emoj.push({
          title: `emoji${i}-${j}`,
          position: -((i+1) * j) * 24
        })
      }
      emojis.push(emoj)
    }
    this.emojis = emojis;
  }

  ngOnInit() {
  }
  activeNav: any={}
  onNav(e: any){
    this.activeNav = e;
  }

  selectGoods(e: any){
    this.post['threadclass'] = e;
  }


  addGoods(){
    let goods = {
      title: '测试商品',
      image: '',
      desc: '',
      price: 0.01,
      total: 3,
      tag: '个'
    }
    this.post['goods'].push(goods)
  }
  total: number = 3;
  showGoodEdit: boolean = false;
  showGoodItem: any = {};
  showGoodIndex: number = 0;
  more(good: any,index: number){
    this.showGoodItem = good;
    this.showGoodIndex = index;
    this.showGoodEdit = true;
  }


  add(){
    console.log(this.post)
    this.topic.add(this.post).subscribe(res=>{
      if(res.code == 1){
        weui.toast('发布成功')
        this.router.navigate(['/bbs/index'])
      }else{
        weui.toast(res.msg)
      }
    })
  }
}
