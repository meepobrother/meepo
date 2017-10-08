import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'paotuibao-home-map-position',
  templateUrl: './home-map-position.component.html',
  styleUrls: ['./home-map-position.component.scss']
})
export class HomeMapPositionComponent implements OnInit {
  showLoading: boolean = true;
  _location: any;
  timer: any;
  time: number = 0;
  @Input() city: string = '';
  @Input() address: any = {};
  @Input() district: any = {};
  @Input()
  set location(val: any){
    if(val){
      this._location = val;
      this.showLoading = false;
    }
  }
  constructor() { }

  ngOnInit() {
    this.timer = setInterval(()=>{
      this.time ++;
    },1000)
  }

}
