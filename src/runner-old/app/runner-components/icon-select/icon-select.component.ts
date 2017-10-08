import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'suyun-icon-select',
  templateUrl: './icon-select.component.html',
  styleUrls: ['./icon-select.component.scss']
})
export class IconSelectComponent implements OnInit {
  items: any[] = []
  @Output() onSelect: EventEmitter<any> = new EventEmitter()
  constructor() {
    this.items = [
      'all','back','cart','category','close','comments','cry','delete','edit','email',
      'favorite','form','help','information','less','moreunfold','more','pic','qrcode',
      'refresh','search','selected','set','smile','success','warning','wrong','account',
      'add','atm','clock','remind','calendar','attachment','discount','service','print',
      'box','process','home','gifts','lights','auto','trade-assurance','atmaway','rfq',
      'scanning','pin','link','cut','text','move','subtract','dollar','office','gerenzhongxin',
      'remind1','icondownload','map','bad','good','skip','iconfontplay2','iconfontstop',
      'compass','security','share','store','manageorder','rejectedorder','phone','mobilephone',
      'creditlevel','creditlevelfilling','save','survey','bussinesscard','hot','data','trade',
      'color','color-filling','lang','video','task-management','trust','password','bags','folder'
    ]
  }

  ngOnInit() {
  }

  select(item: any){
    this.onSelect.emit(item)
  }

}
