import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'alloy-drip',
  templateUrl: './drip.component.html',
  styleUrls: ['./drip.component.scss']
})
export class DripComponent implements OnInit {
  id: any;
  distance: number = 0;
  step: number = 1;

  drip: any;

  @Input() width: number = 62;
  @Input() height: number = 150;

  itemId: string = 'dripCanvas'+new Date().getTime()

  constructor(
    public ele: ElementRef
  ) { }

  ngOnInit() {
    setTimeout(()=>{
      this.init()
    },0)
  }

  init(){
    window['requirejs']([
      window['module_url']+"assets/bower_components/alloytouch/refresh/drip_refresh/asset/drip.js"
    ],()=>{
      console.log(this.itemId)
      this.drip = new window['Drip']('#'+this.itemId ,30);
      this.tick()
    })
  }

  tick(){
    this.distance += this.step;
    this.id = requestAnimationFrame(()=>{
      this.tick()
    });
    this.drip.setDistance(this.distance);
    if (this.distance > 90) {
        this.drip.toLoading();
      cancelAnimationFrame(this.id);
    }
  }

}
