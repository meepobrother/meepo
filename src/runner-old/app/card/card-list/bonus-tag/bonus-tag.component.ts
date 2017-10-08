import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'bonus-tag',
  templateUrl: './bonus-tag.component.html',
  styleUrls: ['./bonus-tag.component.scss']
})
export class BonusTagComponent implements OnInit {

  @Input() items: any[] = []
  @Output() onSelect: EventEmitter<any> = new EventEmitter()
  constructor() {
    this.items = []
  }

  ngOnInit() {
  }

  select(e: any){
    e.active = !e.active;
    this.onSelect.emit(this.items)
  }

}
