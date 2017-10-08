import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'frozen-list-link',
  templateUrl: './frozen-list-link.component.html',
  styleUrls: ['./frozen-list-link.component.scss']
})
export class FrozenListLinkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loadding: any;
  initLoading(e: any){
    this.loadding = e;
    this.loadding.setBlock(false)
    this.loadding.show()
  }

}
