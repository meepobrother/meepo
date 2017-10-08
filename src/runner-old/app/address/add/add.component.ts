import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Location} from "@angular/common";


@Component({
  selector: 'suyun-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(
    public location: Location
  ){

  }

  onSave(){
    this.location.back();
  }
}
