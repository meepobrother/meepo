import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CoreUtilService} from "../../core-util.service";
import {Observable} from "rxjs/Observable";
import {RunnerUtilService} from "../../../runner-components/runner-util.service";
import {CoreFormsDefaultProps} from "../core-forms/core-forms.component";
declare const require;
let store = require('store');

declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
import {Router} from "@angular/router";

@Component({
  selector: 'core-forms-view',
  templateUrl: './core-forms-view.component.html',
  styleUrls: ['./core-forms-view.component.scss']
})
export class CoreFormsViewComponent implements OnInit {
  props: any;
  config: any;
  @Input()
  set type(val: number){
    this.getByCodeByCache()
    this.getItemByType(val).subscribe(res=>{
      this.config = res;
      this.getConfigByCache('core.forms.'+res.code)
    })
  }

  @Input() detail: any = {}

  @Output() onItem: EventEmitter<any> = new EventEmitter()
  constructor(
      public core: CoreUtilService,
      public util: RunnerUtilService,
      public router: Router
  ) {

  }

  getItemByType(val: number){
    return Observable.create(r=>{
      this.items.map(res=>{
        if(res.type == val){
          r.next(res)
          r.complete();
        }
      })
    })
  }

  isDefault: boolean = true;

  getConfigByCache(code: string){
    let props = store.get(code)
    if(props){
      this.props = props;
    }else{
      this.core.post('setting.get',{code: code}).subscribe(res=>{
        if(res.code == 1){
          this.props = res.info;
          this.props = Object.assign(CoreFormsDefaultProps,this.props)
        }else{
          this.props = Object.assign(CoreFormsDefaultProps,this.props)
        }
        store.set(code,this.props)
      })
    }
  }

  ngOnInit() {
    this.getByCodeByCache();
  }
  items: any[] = []
  modules: any[] = []
  getByCodeByCache(){
    let items = store.get('core.runner.tasks')
    if(items){
      this.items = items;
    }else{
      this.core.post('setting.get',{code: 'core.runner.tasks'}).subscribe(res=>{
        if(res.code == 1){
          this.items = res.info;
        }else{
          this.core.get('cloud.modules','imeepos_runner').subscribe(res=>{
            if(res.code == 1){
              this.modules = res.info;
              this.modules.map(res=>{
                if(res.code == 'imeepos_runner'){
                  if(res['post']){
                    this.items = this.items.concat(res.post)
                  }
                }
              })
            }
          })
        }
        store.set('core.runner.tasks',this.items)
      })
    }
  }

  delete(){
    weui.confirm('您确定要删除此任务么?直接清理所有任务数据,不退款!谨慎操作!', ()=>{
      this.core.post('buy.delete',{id: this.detail['id']}).subscribe(res=>{
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
    this.core.post('buy.confirm',{id: this.detail.id}).subscribe(res=>{
      weui.toast(res.msg)
      this.showConfirm = false;
    })
  }
  @Input() hasOnItem: boolean = true;
  _onClick(){
    if(this.hasOnItem){
      this.router.navigate(['/','core','detail',this.detail.id])
    }else{
      this.onItem.emit('on item')
    }
  }
}
