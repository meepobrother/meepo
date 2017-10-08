import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'suyun-album-leader',
  templateUrl: './album-leader.component.html',
  styleUrls: ['./album-leader.component.scss']
})
export class AlbumLeaderComponent implements OnInit {
  @Input() title: string = '热推';
  @Input() items: any[] = []
  constructor(
    public router: Router
  ) {
    this.items = [{}]
  }

  ngOnInit() {
  }

  _onClick(item: any){
    item.id = item.id ? item.id : 0;
    this.router.navigate(['/','asks','info',item.id])
  }

}
