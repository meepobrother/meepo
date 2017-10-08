import {Component, EventEmitter, Input, OnInit, Output,ChangeDetectorRef,ChangeDetectionStrategy} from '@angular/core';
import {Router} from "@angular/router";
import {RunnerUtilService} from "../runner-util.service";

@Component({
  selector: 'runner-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class FooterComponent implements OnInit {
  _items: any[] = []
  @Input() 
  set items(val: any[]){
    this._items = val;
    this.cd.markForCheck();
  }
  @Output() onItem: EventEmitter<any> = new EventEmitter()
  @Input() base: string = '2';
  constructor(
      public router: Router,
      public util: RunnerUtilService,
      public cd: ChangeDetectorRef
  ) {

  }

  ngOnInit() {
    this.util.refresh()
  }

  onClick(item: any){
    this.onItem.emit(item)
  }



}
