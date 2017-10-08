import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'suyun-jd-gong-gao',
  templateUrl: './jd-gong-gao.component.html',
  styleUrls: ['./jd-gong-gao.component.scss']
})
export class JdGongGaoComponent implements OnInit {
  @Input() items: any[] = []
  constructor() { }

  ngOnInit() {
  }

}
