import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'suyun-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss']
})
export class GeolocationComponent implements OnInit {
  @Output() onLocation: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
    window.addEventListener('message',(event)=>{
      // 接收位置信息
      let loc = event.data;
      this.onLocation.emit(loc)
    }, false);
  }

}
