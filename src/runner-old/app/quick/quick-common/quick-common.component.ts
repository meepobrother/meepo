import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router,UrlSerializer,ActivatedRoute } from '@angular/router';

import { quickSelector,roleSelector,pomissionSelector } from '../../redux';
import * as QuickActions from '../../redux/quick/action';
import * as RoleActions from '../../redux/role/action';
import * as SliderActions from '../../redux/slider/action';


@Component({
  selector: 'app-quick-common',
  templateUrl: './quick-common.component.html',
  styleUrls: ['./quick-common.component.scss']
})
export class QuickCommonComponent implements OnInit {
  open: boolean = false;
  role: any;
  open$: any;
  role$: any;

  pomission$: any;
  constructor(
    public store$: Store<any>,
    public router: Router,
    public urlSerializer: UrlSerializer,
    public activatedRoute: ActivatedRoute
  ) { 
    this.open$ = this.store$.select(quickSelector);
    this.role$ = this.store$.select(roleSelector);
    this.pomission$ = this.store$.select(pomissionSelector);
  }

  ngOnInit() {
    this.store$.dispatch(new RoleActions.InitAction({}));

    this.store$.dispatch(new RoleActions.AddAction({
      title: '装修',
      icon: '',
      call: ()=>{
        this.store$.dispatch(new SliderActions.ToggleAction({}));
        this.store$.dispatch(new QuickActions.ToggleAction({}));
      }
    }))
  }

  ngOnDestroy(){}

  open2(){
    this.store$.dispatch(new QuickActions.ToggleAction({}));
  }
  // 点击事件
  go(item: any){
    this.open = !this.open;
    item.call ? item.call() : this.router.navigate(item.link)
  }
  // 站长点击添加
  add(){
    this.router.navigate(['/cloud/index'])
  }
}

