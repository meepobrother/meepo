import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CustomOverlay} from './overlay';
import { CoreUtilService } from '../../meepo-core/core-util.service';
@Component({
  selector: 'suyun-task-map',
  templateUrl: './task-map.component.html',
  styleUrls: ['./task-map.component.scss']
})
export class TaskMapComponent implements OnInit {
  map: any;
  myCenter: any;
  geocoder: any;
  constructor(
    public core: CoreUtilService
  ) { }

  ngOnInit() {
    let qq = window['qq'];

    this.map = new qq.maps.Map(document.getElementById("map"), {
      zoom:6
    });
  }
  items: any[] = []
  onLocation(e: any){
    let qq = window['qq'];
    if(e && e['lat']){
      this.myCenter = new qq.maps.LatLng(e.lat,e.lng);
      this.map.panTo(this.myCenter)
      this.map.zoomTo(12);
      if(this.items.length>0){

      }else{
        this.getTasks(e.lat,e.lng)
      }
    }
  }
  markerClusterer: any;
  drawMap(){
    let qq = window['qq'];
    let markers = new qq.maps.MVCArray();

    this.overlay = new window['qq'].maps.Overlay({
      map: this.map,
      position: this.myCenter
    });

    this.items.map((res,key)=>{
      var latLng = new qq.maps.LatLng(res['lat'], res['lng']);
      var decoration = new qq.maps.MarkerDecoration(key, new qq.maps.Point(0, -5));
      var marker = new qq.maps.Marker({
        'position': latLng,
        map: this.map
      });
      markers.push(marker);
      this.drawOverlay(latLng);
    })

    if(!this.markerClusterer){
      this.markerClusterer = new qq.maps.MarkerCluster({
        map: this.map,
        minimumClusterSize: 2, //默认2
        markers: markers,
        zoomOnClick: true, //默认为true
        gridSize: 30, //默认60
        averageCenter: true, //默认false
        maxZoom: 18, //默认18
      });
    }
  }

  overlay: any;

  @ViewChild('mapInfo') mapInfo: ElementRef

  drawOverlay(position: any){
    let overlay = new CustomOverlay(position, 0,this.mapInfo.nativeElement.toString()  );
    overlay.setMap(this.map);
  }

  getTasks(lat,lng){
    this.core.post('tasks.getNearBy',{lat: lat,lng: lng}).subscribe(res=>{
      if(res.code == 1){
        this.items = res['info']['list'];
        this.drawMap()
      }
    })
  }

}

