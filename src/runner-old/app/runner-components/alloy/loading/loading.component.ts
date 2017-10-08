import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'alloy-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  ctx: any;
  drawIntervalID: any;
  spokes: number = 12;

  @Input() R: number = 0;
  @Input() G: number = 0;
  @Input() B: number = 0;


  constructor() { }

  ngOnInit() {
    this.init()
  }

  init(){
    var canvas = document.getElementById('myCanvas');
    if (canvas['getContext']) {
      this.ctx = canvas['getContext']('2d');
      this.ctx.translate(15, 15);	// Center the origin
      this.ctx.lineWidth = 2;
      this.ctx.lineCap = "round"
      this.drawIntervalID = setInterval(()=>{
        this.draw()
      }, 150);
      return this.drawIntervalID;
    }
  }

  draw(){
    this.ctx.clearRect(-15, -15, 30, 30);		// Clear the image
    this.ctx.rotate(Math.PI * 2 / this.spokes);	// Rotate the origin
    for (var i = 0; i < this.spokes; i++) {
      this.ctx.rotate(Math.PI * 2 / this.spokes);	// Rotate the origin
      this.ctx.strokeStyle = `rgba(${this.R},${this.G},${this.B},${i / this.spokes})`;	// Set transparency
      this.ctx.beginPath();
      this.ctx.moveTo(0, 8);
      this.ctx.lineTo(0, 12);
      this.ctx.stroke();
    }
  }

  ngOnDestroy(){
    clearInterval(this.drawIntervalID)
  }


}
