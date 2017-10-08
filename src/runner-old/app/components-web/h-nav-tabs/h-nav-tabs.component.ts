import {Component, Input, OnInit,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'h-nav-tabs',
  templateUrl: './h-nav-tabs.component.html',
  styleUrls: ['./h-nav-tabs.component.scss']
})
export class HNavTabsComponent implements OnInit {
  @Input() tip: string = '';
  @Input() items: any[] = []
  @Output() onItem: EventEmitter<any> = new EventEmitter();
  constructor() {
    this.items = [
      {
        title: '会员',
        active: true,
        icon: 'fa-user'
      }, {
        title: '员工',
        active: false,
        icon: 'fa-briefcase'
      },{
        title: '站长',
        active: false,
        icon: 'fa-'
      },
      {
        title: '管理',
        active: false,
        icon: 'fa-'
      }
    ]
  }

  ngOnInit() {
  }

  _onclick(item: any){
    this.items.map(res=>{
      res.active = false;
    })
    item.active = true;
    this.onItem.emit(item)
  }

}
