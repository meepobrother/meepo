import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {TaskService} from "services-components";

@Component({
  selector: 'suyun-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  show: any = {
    saveImage: false
  }
  id: number = 0;
  qrcode: string = '';

  detail: any = {}

  recivePoint: any;
  sendPoint: any;
  routerUrl: string;

  myUserInfo: any;
  info: any;

  detailLists: any[] = [];
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public task: TaskService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(res=>{
      this.id = res.id;
      this.getDetail();
    })
  }

  getDetail(){
    this.task.detail({id: this.id}).subscribe(res=>{
      this.detail = res.info.order;
      this.info = this.detail.detail;
      this.detailLists = [
        {
          title: '发布时间',
          desc: this.detail.create_time
        },
        {
          title: '结束时间',
          desc: this.detail.limit_time_title
        },
        {
          title: '任务赏金',
          desc: this.info.total + '元'
        },
        {
          title: '起始地',
          desc: this.info.sendaddress
        },
        {
          title: '目的地',
          desc: this.info.receiveaddress
        },
        {
          title: '留言说明',
          desc: this.detail.message ? this.detail.message : '未填写'
        }
      ]

      this.myUserInfo = res.info.user;
      this.recivePoint = {
        lat: this.detail.detail.receivelat,
        lng: this.detail.detail.receivelon
      }
      this.sendPoint = {
        lat: this.detail.detail.sendlat,
        lng: this.detail.detail.sendlon
      }
      console.log(this.recivePoint,this.sendPoint)
      this.routerUrl += `eword=任务目的地&epointx=${this.recivePoint.lat}&epointy=${this.recivePoint.lng}`;
      this.routerUrl += `&sword=任务起始地&spointx=${this.sendPoint.lat}&spointy=${this.sendPoint.lng}`;
      this.routerUrl += '?referer=myapp&key=OB4BZ-D4W3U-B7VVO-4PJWW-6TKDJ-WPB77';
    })
  }

  doDetail(){
    this.router.navigate(['/','tasks','detail',this.id])
  }

  showSaveImage(){
    this.show.saveImage = true;
  }

  clsoeSaveImage(){
    this.show.saveImage = false;
  }

}
