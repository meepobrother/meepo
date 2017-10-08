import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'suyun-locpicker',
  templateUrl: './locpicker.component.html',
  styleUrls: ['./locpicker.component.scss']
})
export class LocpickerComponent implements OnInit {
  @Output() onPicker: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
    window.addEventListener('message', (event)=>{
      var loc = event.data;
      if (loc && loc.module == 'locationPicker') {
        console.log('location', loc);
        this.onPicker.emit(loc);
      }
    }, false);
  }

}
