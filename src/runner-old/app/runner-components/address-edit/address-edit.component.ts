import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { CoreUtilService } from '../../meepo-core/core-util.service';
declare const weui;
let toast = weui.toast;
let actionSheet = weui.actionSheet;


@Component({
  selector: 'suyun-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.scss']
})
export class AddressEditComponent implements OnInit {

  @Input() id: number = 0;
  @Output() onSave: EventEmitter<any> = new EventEmitter()
  show: any = {
    picker: false
  }
  post: any = {
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
    public route: ActivatedRoute,
    public core: CoreUtilService
  ) {

  }

  ngOnInit() {
    if(this.id){
      this.detail()
    }
  }

  openLocpicker(){
    this.show.picker = true;
  }

  detail(){
    this.core.post('address.detail',this.id).subscribe(res=>{
      this.post = res.info;
    })
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
  save(){
    if(!this.posting){
      this.posting = true;

      this.post['id'] = this.id;
      this.core.post('address.edit',this.post).subscribe(res=>{
        console.log(res)
        toast('编辑地址成功', {
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
