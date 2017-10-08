import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'suyun-shops-item',
  templateUrl: './shops-item.component.html',
  styleUrls: ['./shops-item.component.scss']
})
export class ShopsItemComponent implements OnInit {
  @Input() hasTicket: boolean = false;
  @Input() detail: any = {
    image: '',
    title: ''
  }
  @Input() tickets: any[] = [];


  constructor() { }

  ngOnInit() {
  }

}

export interface TicketItemProp{
  image?: string,
  title?: string
}

export interface ShopItemProp{
  title?: string,
  tag?: string,
  duration?: string,
  duration_time?: string,
  desc?: string,
  private?: string,
  tickets?: TicketItemProp
}