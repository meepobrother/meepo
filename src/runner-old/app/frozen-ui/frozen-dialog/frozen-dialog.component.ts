import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'frozen-dialog',
  templateUrl: './frozen-dialog.component.html',
  styleUrls: ['./frozen-dialog.component.scss']
})
export class FrozenDialogComponent implements OnInit {
  title: string = '新手任务';
  subTitle: string = '标题标题';
  content: string = '开通年费QQ会员即可领取欢乐斗地主感恩节回馈礼包';

  isShow: boolean = false;

  @Input() items: any[] = [
    {
      title: '取消',
      active: false,
      call: ()=>{
        this.hide()
      }
    },
    {
      title: '确定',
      active: true,
      call: ()=>{
        this.hide()
      }
    }
  ];

  @Output() onInit: EventEmitter<any> = new EventEmitter()

  constructor() {

  }

  ngOnInit() {
    this.onInit.emit(this)
  }

  setTitle(val: string){
    this.title = val;
    return this;
  }

  setSubTitle(val: string){
    this.subTitle = val;
    return this;
  }

  setContent(val: string){
    this.content = val;
    return this;
  }

  show(){
    this.isShow = true;
  }

  hide(){
    this.isShow = false;
  }

  onItem(e: any){
    this.items.map(res=>{
      res.active = false
    })
    e.active = true;
    e.call && e.call()
    this.hide()
  }

}
