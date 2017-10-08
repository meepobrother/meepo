import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'suyun-car-info',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss']
})
export class CarInfoComponent implements OnInit {
  @Input() item: any = {}
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  goDetail(){
    this.router.navigate(['/repair/carfiles-edit/',this.item['id']])
  }
}
