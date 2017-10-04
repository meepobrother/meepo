### weui picker

- [查看演示](http://meepo.com.cn/angular/weui/weui-picker)

```html
<weui-page [formGroup]="form">
    <button weui-btn default (click)="open(picker1)">打开</button>
    <weui-picker #picker1="weuiPicker">
        <picker-action left>
            左边
        </picker-action>
        <picker-action right>
            右边
        </picker-action>
        <picker-group formControlName="picker1" id="side1" (onChange)="onChange1($event)">
            <picker-item [item]="item" [active]="item.active" *ngFor="let item of items;index as i;">测试{{i}}</picker-item>
        </picker-group>
        <picker-group formControlName="picker2" id="slid2" (onChange)="onChange2($event)">
            <picker-item [item]="item" [active]="item.active" *ngFor="let item of items;index as i;">测试{{i}}</picker-item>
        </picker-group>
    </weui-picker>
</weui-page>
```


```ts

import { Component, OnInit, ChangeDetectorRef, forwardRef, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WeuiPicker } from './weui/weui-picker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  form: FormGroup;
  constructor(
    public cd: ChangeDetectorRef,
    public fb: FormBuilder
  ) {
    this.form = this.fb.group({
      check: false,
      picker1: {},
      picker2: {}
    });
  }

  items: any[] = [
    {
      active: false
    },
    {
      active: false
    },
    {
      active: false
    },
    {
      active: false
    },
    {
      active: false
    },
    {
      active: false
    },
    {
      active: true
    }
  ];

  open(e: any) {
    e.toggle();
  }
  ngOnInit() {
    setInterval(() => {
      this.items.push({
        active: false
      });
    }, 3000);
  }
}

```