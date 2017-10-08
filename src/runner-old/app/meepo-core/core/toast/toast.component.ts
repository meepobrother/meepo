import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  prefixCls: string = '';
  content: string = '';
  iconType: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
