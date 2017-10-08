import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RunnerUtilService} from "../runner-util.service";
import {GlobalService} from "services-components/src/app/utils/global.service";

@Component({
  selector: 'suyun-admin-footer',
  templateUrl: './admin-footer.component.html',
  styleUrls: ['./admin-footer.component.scss']
})
export class AdminFooterComponent implements OnInit {
  @Output() onItem: EventEmitter<any> = new EventEmitter()
  @Input() items: any[] = [];
  role: string = 'member';
  constructor(
    public util: RunnerUtilService,
    public globalService: GlobalService
  ) {}

  ngOnInit() {
    this.items = this.util.config['admin']['footers'];

  }

  _onItem(e: any){
    this.onItem.emit(e)
  }



}
