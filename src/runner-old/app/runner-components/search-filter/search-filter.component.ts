import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  @Input() items: any[] = []
  _classes: any[] = []
  @Input()
  set classes(val: any[]){
    if(val){
      this._classes = val;
      this.setActiveClass()
    }
  }

  setActiveClass(){
    this._classes.map(res=>{
      if(res.active){
        this.items.map(r=>{
          if(r.code == 'classes'){
            r.title = res.title;
          }
        })
      }
    })
  }

  @Output() onItem: EventEmitter<any> = new EventEmitter()
  @Output() onNearby: EventEmitter<any> = new EventEmitter()
  @Output() onPrice: EventEmitter<any> = new EventEmitter()
  @Output() onReset: EventEmitter<any> = new EventEmitter()
  @Output() onSure: EventEmitter<any> = new EventEmitter()
  @Output() onFilter: EventEmitter<any> = new EventEmitter()

  constructor() {
    this.items = [
      {
        title: '全部',
        classname: 'new-sort-integrative',
        false: false,
        spanclass: '',
        icon: '',
        code: 'classes'
      },
      {
        title: '附近',
        classname: '',
        active: false,
        spanclass: '',
        icon: '',
        code: 'nearby'
      },
      {
        title: '赏金',
        classname: 'new-sort-price',
        active: false,
        spanclass: '',
        icon: '',
        code: 'price'
      },
      {
        title: '筛选',
        classname: '',
        active: false,
        spanclass: '',
        icon: 'choose-icon',
        code: 'filter'
      }
    ]

    this._classes = [
      {
        title: '全部',
        active: true
      },
      {
        title: '帮我买',
        active: false
      },
      {
        title: '帮我送',
        active: false
      },
      {
        title: '帮帮忙',
        active: false
      }
    ]
  }

  ngOnInit() {
  }
  showFilter: boolean = false;
  showMark: boolean = false;
  _onItem(e: any){
    if(e.code == 'price'){
      e.active = true;
      if(e.spanclass == ''){
        e.spanclass = 'arrow-up';
      }else if(e.spanclass == 'arrow-up'){
        e.spanclass = 'arrow-down'
      }else if(e.spanclass == 'arrow-down'){
        e.spanclass = 'arrow-up'
      }
      this.onPrice.emit(e)
    }else if(e.code == 'classes'){
      e.active = !e.active;
      this.showClassList = !this.showClassList
    }else if(e.code == 'nearby'){
      e.active = !e.active;
      this.onNearby.emit(e)
    }else if(e.code == 'filter'){
      e.active = !e.active;
      this.showFilter = !this.showFilter;
      this.showMark = true;
      this.onFilter.emit(e)
    }
  }
  hideBg(){
    this.showMark = false;
    this.showFilter = false;
    this.showClassList = false;
  }
  showClassList: boolean = false;
  selectClass(e: any){
    this._classes.map(res=>{
      res.active = false;
    })
    this.showClassList = false;
    e.active = true;
    this.items.map(res=>{
      if(res.code == 'classes'){
        res.title = e.title;
        res.active = false;
      }
    })
    this.showMark = false;
    this.onItem.emit(e)
  }

  reset(){
    this.onReset.emit('reset')
    this.hideBg()
  }

  sure(){
    this.onSure.emit('sure')
    this.hideBg()
  }

}
