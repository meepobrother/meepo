import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {Location} from "@angular/common";

@Component({
  selector: 'suyun-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id: number = 0;

  constructor(
    public route: ActivatedRoute,
    public location: Location
  ) {

  }

  ngOnInit() {
    this.route.params.subscribe(res=>{
      this.id = res.id;
    })
  }

  onSave(){
    this.location.back();
  }

}
