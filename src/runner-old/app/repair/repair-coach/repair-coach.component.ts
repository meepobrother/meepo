import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suyun-repair-coach',
  templateUrl: './repair-coach.component.html',
  styleUrls: ['./repair-coach.component.scss']
})
export class RepairCoachComponent implements OnInit {
  post: any = {}
  showTime: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(e: any){

  }

  localId: string = '';
  timeLen: number = 0;


  onRecord(e: any){

  }

}
