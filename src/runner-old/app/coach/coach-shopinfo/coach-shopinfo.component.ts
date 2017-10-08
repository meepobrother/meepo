import {Component, HostBinding, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {CoreUtilService} from "../../meepo-core/core-util.service";

@Component({
  selector: 'suyun-coach-shopinfo',
  templateUrl: './coach-shopinfo.component.html',
  styleUrls: ['./coach-shopinfo.component.scss']
})
export class CoachShopinfoComponent implements OnInit {

  info: any = {}
  constructor(
    public dom: DomSanitizer,
    public util: RunnerUtilService,
    public core: CoreUtilService
  ) { }

  ngOnInit() {
    this.init();
    this.util.showFooter();
  }

  init(){
    this.core.post('setting.get',{code: 'right'}).subscribe(res=>{
      this.info = res.info;
      this.info['content'] = this.dom.bypassSecurityTrustHtml(this.info['content'])
    });
  }

}
