import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {CoreUtilService} from "../../core-util.service";

@Component({
  selector: 'module-tags',
  templateUrl: './module-tags.component.html',
  styleUrls: ['./module-tags.component.scss']
})
export class ModuleTagsComponent implements OnInit {
  modules: any[] = []
  @Output() onSelect: EventEmitter<any> = new EventEmitter()
  @Input() props: any = {}
  constructor(
      public core: CoreUtilService
  ) { }

  ngOnInit() {
    this.props = Object.assign(defaultProps,this.props);
    console.log(this.props)
    this.core.get('cloud.modules','imeepos_runner').subscribe(res=>{
      if(res.code == 1){
        this.modules = res.info;
      }
    })
  }

  select(e: any){
    e.active = !e.active;
    this.onSelect.emit({modules: this.modules,item: e})
  }

  open(item: any){
    item['open'] = !item['open'];
  }

}


export const defaultProps = {
  showAdmin: true,
  showHome: true,
  showIndex: true,
  showPost: true
}