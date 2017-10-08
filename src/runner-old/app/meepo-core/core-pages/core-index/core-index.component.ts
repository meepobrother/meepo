import {Component, ElementRef, HostBinding, OnInit, Renderer2, ViewChild} from '@angular/core';
import {RunnerUtilService} from "../../../runner-components/runner-util.service";
import {ActivatedRoute, Router} from "@angular/router";
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
import {CorePageComponent} from "../../core-share/core-page/core-page.component";
import {CoreUtilService} from "../../core-util.service";

declare const require;
let store = require('store');
@Component({
  selector: 'suyun-core-index',
  templateUrl: './core-index.component.html',
  styleUrls: ['./core-index.component.scss'],
  providers: [CoreUtilService]
})
export class CoreIndexComponent extends CorePageComponent implements OnInit {
  //触发更新
  offset: number = 0;

  tabs: any[] = []
  tasks: any[] = [];
  navs: any[] = [];

  reset: boolean = false;
  activeTabCode: string = 'song';
  activeService: any;

  nearByItem: any;
  mylocation: any = store.get('mylocation')

  orderByString: string = '';

  loading: boolean = false;

  runners: any[] = [];
  advs: any[] = [];

  constructor(
      public util: RunnerUtilService,
      public router: Router,
      public route: ActivatedRoute,
      public ele: ElementRef,
      public render: Renderer2,
      public core: CoreUtilService
  ) {
    super(ele,render)
    this.tasks = [];
  }
  modules: any[] = []
  getByCode(){
    this.core.post('setting.get',{code: 'core.runner.tasks'}).subscribe(res=>{
      if(res.code == 1){
        this.tabs = [
          {
            title: '全部',
            code: '',
            active: true
          }
        ]
        res.info.map(res=>{
          res.active = false;
        });
        this.tabs = this.tabs.concat(res.info);

      }else{
        this.core.get('cloud.modules','imeepos_runner').subscribe(res=>{
          if(res.code == 1){
            this.modules = res.info;
            this.modules.map(res=>{
              if(res.code == 'imeepos_runner'){
                this.tabs = [
                  {
                    title: '全部',
                    code: '',
                    active: true
                  }
                ]
                if(res['post']){
                  res.post.map(res=>{
                    res.active = false;
                  })
                  this.tabs = this.tabs.concat(res.post)
                }
              }
            })
          }
        })
      }
      let hasActive = false;
      this.tabs.map(res=>{
        if(res.active){
          this.activeTabCode = res.code;
          this.activeTabType = res.type;
          this.onNearby(this.nearByItem)
          this.getTasks();
          hasActive = true;
        }
      });
      if(!hasActive){
        let item = {
          title: '全部',
          code: '',
          active: true
        }
        this.onTab(item);
      }
    })
  }
  activeTabType: string;
  timer: any;
  //初始化
  ngOnInit() {
    this.route.data.subscribe(res=>{
      let data = res.data;
    })
    this.getByCode()
    this.util.showFooter();
    this.timer = setInterval(()=>{
      this.util.refresh()
    },500)
    this.util.addTimer(this.timer)
  }
  ngOnDestroy(){
    this.util.clearTimer()
    this.timer = null;
    this.tasks = [];
  }
  //触发更新滑动窗口
  refreshScroll(){
    setTimeout(()=>{
      this.offset ++;
    },500)
  }
  //下拉加载更多
  onLoadMore(){
    this.onNearby(this.nearByItem,true)
  }
  //任务分类
  onTab(e: any){
    this.loading = false;
    // this.activeService = this.task
    this.tasks = []
    let start = 0;
    this.activeTabCode = e.code;
    this.activeTabType = e.type;
    this.onNearby(this.nearByItem);
  }
  //获取任务
  getTasks(){
    let start = this.tasks.length;
    if(!this.loading){
      this.loading = true;
      this.core.post('task.getAll',{start: start,len: 20,type: this.activeTabType,orderby: this.orderByString,action: 'index'}).subscribe(res=>{
        if(res.code == 1){
          let list = [];
          if(this.mylocation){
            let startPoint = new window['qq'].maps.LatLng(this.mylocation.lat, this.mylocation.lng);
            list = res.info;
            list.map(res=>{
              let end = new window['qq'].maps.LatLng(res.lat, res.lng);
              res['len'] = window['qq'].maps.geometry.spherical.computeDistanceBetween(startPoint, end);
              res['len'] = (Number(res['len']) / 1000).toFixed(2);
              res['len_desc'] = '距离您:'+res['len']+'km';
            })
          }else{
            list = res.info;
          }
          start > 0 ? this.tasks = this.tasks.concat(list) : this.tasks = list;
          if(list.length>0){
            this.loading = false
            this.refreshScroll()
          }
        }
      })
    }
  }

  //获取附近任务
  getNearByTask(){
    let start = this.tasks.length;
    if(!this.loading){
      this.loading = true;
      this.core.post('task.getNearBy',{start: start,len: 20,lat: this.mylocation.lat,lng: this.mylocation.lng,orderby: this.orderByString,type: this.activeTabType}).subscribe(res=>{
        if(res.code == 1){
          let list = res.info.list;
          let startPoint = new window['qq'].maps.LatLng(this.mylocation.lat, this.mylocation.lng);
          list.map(res=>{
            let end = new window['qq'].maps.LatLng(res.lat, res.lng);
            res['len'] = window['qq'].maps.geometry.spherical.computeDistanceBetween(startPoint, end);
            res['len'] = (Number(res['len']) / 1000).toFixed(2);
            res['len_desc'] = '距离您:'+res['len']+'km';
          })
          start > 0 ? this.tasks = this.tasks.concat(list) : this.tasks = list;
          if(list.length>0){
            this.loading = false
            this.refreshScroll()
          }
        }
      })
    }
  }
  //获取任务总入口
  onNearby(e: any,loadMore: boolean = false){
    if(e){
      this.nearByItem = e;
      if(e['active']){
        //附近任务
        if(this.mylocation){
          if(!loadMore){
            this.tasks = []
          }
          this.getNearByTask()
        }else{
          toast('定位失败')
        }
      }else{
        //所有任务
        if(!loadMore){
          this.tasks = []
        }
        this.getTasks()
      }
    }else{
      if(!loadMore){
        this.tasks = []
      }
      this.getTasks()
    }
  }
  //价格排序
  onPrice(e: any){
    console.log(e)
    if(e.spanclass == 'arrow-up'){
      this.orderByString = 'DESC';
    }else{
      this.orderByString = 'ASC';
    }
    this.onNearby(this.nearByItem)
  }
  //跑腿列表路由
  onMore(){
    this.router.navigate(['/','services','runner'])
  }
  //店铺路由
  goShop(e: any){
    this.router.navigate(['/services/shop/',e.id])
  }
  // 详情路由
  goDetail(e: any){
    if(e.type == 0 || e.type == 1){
      this.router.navigate(['/runner/song/detail',e.id])
    }
    if(e.type == 2 || e.type == 3){
      this.router.navigate(['/runner/buy/detail',e.id])
    }
    if(e.type == 4 || e.type   == 5){
      this.router.navigate(['/runner/help/detail',e.id])
    }
  }

}
