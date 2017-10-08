import { Component, OnInit } from '@angular/core';
declare const $;
@Component({
  selector: 'suyun-h-agile-list',
  templateUrl: './h-agile-list.component.html',
  styleUrls: ['./h-agile-list.component.scss']
})
export class HAgileListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$(".sortable-list").sortable({
        connectWith: ".connectList"
    }).disableSelection();
  }

}
