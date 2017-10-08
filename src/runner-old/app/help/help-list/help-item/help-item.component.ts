import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {RunnerUtilService} from "../../../runner-components/runner-util.service";
import weui from 'weui.js';
import {BuyService} from "services-components";

@Component({
  selector: 'suyun-help-item',
  templateUrl: './help-item.component.html',
  styleUrls: ['./help-item.component.scss']
})
export class HelpItemComponent implements OnInit {
  @Input() avatar: string = '';
  @Input() nickname: string = '';
  @Input() desc: string = '';

  @Output() onItem: EventEmitter<any> = new EventEmitter()
  @Input() detail: any = {}

  isDefault: boolean = true;

  @Input() hasOnItem: boolean = false;
  constructor(
    public router: Router,
    public util: RunnerUtilService,
    public buy: BuyService
  ) { }

  ngOnInit() {
  }

  delete(){
    weui.confirm('您确定要删除此任务么?直接清理所有任务数据,不退款!谨慎操作!', ()=>{
      this.buy.delete({id: this.detail['id']}).subscribe(res=>{
        weui.toast('操作成功');
      })
    }, function(){

    });
  }

  pai(){
    if(!this.detail.lat || !this.detail.lng){
      weui.toast('目标地址不明,无法派单');
    }else{
      this.router.navigate(['/','admin','pai',this.detail.lat,this.detail.lng,this.detail.id])
    }
  }
  showConfirm: boolean = true;
  confirm(){
    this.buy.confirm({id: this.detail.id}).subscribe(res=>{
      weui.toast(res.msg)
      this.showConfirm = false;
    })
  }

  _onClick(){
    if(this.hasOnItem){
      this.router.navigate(['/','help','detail',this.detail.id])
    }else{
      this.onItem.emit('on item')
    }
  }

}
