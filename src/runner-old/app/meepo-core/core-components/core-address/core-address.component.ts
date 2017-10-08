import {Component, ElementRef, EventEmitter, HostBinding, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {CoreUtilService} from "../../core-util.service";
import {CorePageComponent} from "../../core-share/core-page/core-page.component";
import {FormControl} from "@angular/forms";
declare const require;
let store = require('store');
@Component({
  selector: 'core-address',
  templateUrl: './core-address.component.html',
  styleUrls: ['./core-address.component.scss']
})
export class CoreAddressComponent extends CorePageComponent implements OnInit {
  focused: boolean = false;
  placeholder: string = '请输入地址关键字';
  value: string = '';

  @ViewChild('input') input: ElementRef

  @Output() onSelect: EventEmitter<any> = new EventEmitter()

  term: FormControl = new FormControl()

  hasMember: boolean = true;

  topNavs: any[] = [
    {
      title: '选择地址',
      active: true,
      code: 'selectAddress'
    }
    ,{
      title: '我的地址',
      active: false,
      code: 'myaddress'
    }
  ]
  constructor(
      public core: CoreUtilService,
      public ele: ElementRef,
      public render: Renderer2
  ) {
    super(ele,render)
    this.render.setStyle(this.ele.nativeElement,'z-index','99999')
    this.render.setStyle(this.ele.nativeElement,'overflow','scroll')

    this.term.valueChanges
        .debounceTime(400)
        .subscribe( (term) => {
          this.placeholder = term;
          this.search(term)
        });
  }
  activeItem: any = {}
  onTopNavItem(e: any){
    this.activeItem = e;
    console.log(this.activeItem)
  }

  ngOnInit() {
    this.getMyaddress();
    this.topNavs.map(res=>{
      if(res.active){
        this.activeItem = res;
      }
    })
  }

  result: any = {};
  showLocation: boolean = false;
  getMyaddress(){
    let mylocation = store.get('mylocation')
    if(mylocation){
      this.region = mylocation.city;
      this.core.post('map.gcoder',{location: mylocation}).subscribe(res=>{

        if(res.code == 1){
          if(res.info.result){
            this.result = res.info.result;
            this.count = this.result.poi_count
            this.placeholder = this.result.formatted_addresses.rough;
            this.region = res.info.result.address_component.city
          }
        }
      })
    }else{
      this.showLocation = true;
    }
  }

  onLocation(e: any){
    if(e){
      if(e['lat']){
        store.set('mylocation',e)
        this.showLocation = false;
        this.getMyaddress()
      }
    }
  }

  onFocus(){
    this.focused = true;
    this.input.nativeElement.focus()
  }

  onChange(e: any){
    console.log(e)
    this.placeholder = this.value;
    // this.search()
  }

  cancel(){
    this.value = '';
    this.getMyaddress()
  }

  region: string = '';
  count: number = 0;
  info: any;
  search(e: any){
    console.log(e)
    this.core.post('map.search',{region: this.region,keyword: e}).subscribe(res=>{
      this.info = res;
      if(res.code == 1){
        if(res.info.data){
          this.result.pois = res.info.data;
          this.count = res.info.count;
        }
      }
    })
  }

  select(item: any){
    let address = {
      lat: item.lat ? item.lat : item.location.lat,
      lng: item.lng ? item.lng : item.location.lng,
      poiaddress: item.poiaddress ? item.poiaddress : item.address,
      detail: item['detail'] || '',
      mobile: item['mobile'] || '',
      poiname: item.poiname ? item.poiname : item.title
    }
    this.onSelect.emit(address)
  }

}
