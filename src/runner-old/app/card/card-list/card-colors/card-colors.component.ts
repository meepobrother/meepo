import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardService} from "services-components/src/app/card-services/card.service";

@Component({
  selector: 'card-colors',
  templateUrl: './card-colors.component.html',
  styleUrls: ['./card-colors.component.scss']
})
export class CardColorsComponent implements OnInit {
  colors: any[] = []
  @Output() onSelect: EventEmitter<any> = new EventEmitter()
  constructor(
      public card: CardService
  ) { }

  ngOnInit() {
    console.log(this.color)
    this.getColors()
  }

  getColors(){
    this.card.colors({}).subscribe(res=>{
      if(res.code == 1){
        this.colors = res.info;
      }
    })
  }
  @Input() color: string = '';
  onChange(){
    this.onSelect.emit(this.color)
  }
}
