import {Component, Input, OnInit} from '@angular/core';
import { placements } from './placements';

@Component({
  selector: 'tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  @Input() placement: string = '';
  @Input() target: any;
  points: any[] = []
  overflow: any[] = []
  offset: any[] = []
  targetOffset: any[]= [0,0]
  constructor() { }

  ngOnInit() {
    let pla = placements[this.placement];
    this.points = pla.points;
    this.overflow = pla.overflow;
    this.offset = pla.offset;
  }

}