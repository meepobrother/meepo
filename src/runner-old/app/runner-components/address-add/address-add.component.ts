import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;
import { CoreUtilService } from '../../meepo-core/core-util.service';


@Component({
  selector: 'suyun-address-add',
  templateUrl: './address-add.component.html',
  styleUrls: ['./address-add.component.scss']
})
export class AddressAddComponent implements OnInit {

  show: any = {
    picker: false
  }

  @Output() onSave: EventEmitter<any> = new EventEmitter()
  @Input() hasMember: boolean = true;

  @Input() post: any = {
    realname: '',
    mobile: '',
    cityname: '',
    detail: '',
    poiaddress: '点击进行定位',
    lat: '',
    lng: '',
    poiname: ''
  }

  constructor(
    public core: CoreUtilService
  ) { }

  ngOnInit() {
  }

  openLocpicker(){
    this.show.picker = true;
  }

  onPicker(e: any){
    this.show.picker = false;
    this.post.poiaddress = e.poiaddress;
    this.post.poiname = e.poiname;
    this.post.cityname = e.cityname;
    this.post.lat = e.latlng.lat;
    this.post.lng = e.latlng.lng;
  }
  posting: boolean = false;
  check(){
    let lat = Number(this.post['lat']);
    if(!lat){
      toast('请点击定位您的位置')
      return false;
    }
    return true;
  }
  save(){
    if(this.check()){
      this.posting = true;
      this.core.post('address.add',this.post).subscribe(res=>{
        toast('添加地址成功', {
          duration: 2000,
          className: 'custom-classname',
          callback:()=>{
            this.posting = false;
            this.onSave.emit(this.post)
          }
        });
      })
    }
  }
}
