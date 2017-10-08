import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'suyun-runner-web-member',
  templateUrl: './runner-web-member.component.html',
  styleUrls: ['./runner-web-member.component.scss']
})
export class RunnerWebMemberComponent implements OnInit {
  members: any[] = []
  constructor() { }

  ngOnInit() {
  }

}
