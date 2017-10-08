import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'suyun-asks-item',
  templateUrl: './asks-item.component.html',
  styleUrls: ['./asks-item.component.scss']
})
export class AsksItemComponent implements OnInit {
  @Input() detail: any = {}
  id: number = 0;
  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  _onClick(){
    this.router.navigate(['/','asks','detail',this.id])
  }

}
