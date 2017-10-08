import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'frozen-tab',
  templateUrl: './frozen-tab.component.html',
  styleUrls: ['./frozen-tab.component.scss']
})
export class FrozenTabComponent implements OnInit {
  @Input() items: any[] = []
  @Output() onItem: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  _onItem(e: any){
    this.items.map(res=>{
      res.active = false;
    })
    e.active = true;
    this.onItem.emit(e)
  }
}
