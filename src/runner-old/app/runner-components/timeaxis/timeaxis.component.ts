import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'timeaxis',
  templateUrl: './timeaxis.component.html',
  styleUrls: ['./timeaxis.component.scss']
})
export class TimeaxisComponent implements OnInit {
  @Input() items: any[] = []
  @Output() onItem: EventEmitter<any> = new EventEmitter()
  @Input() label: any = {}

  constructor() {
    this.items = [
      {
        status: 'current',
        title: '测试',
        desc: '介绍'
      },
      {
        status: '',
        title: '测试',
        desc: '介绍'
      },
      {
        status: '',
        title: '测试',
        desc: '介绍'
      },
    ]
  }

  reset(){
    this.items.map(res=>{
      res['status'] = '';
    })
    this.items[0].status = 'current';
    this.width =0;
    this.getCurrent()
  }

  ngOnInit() {
    this.getCurrent();
  }
  _onItem(item: any){
    this.items.map(res=>{
      res['status'] = 'future'
    })
    item['status']  = 'current';
    this.width = 0;
    this.getCurrent()
    this.onItem.emit(item)
  }

  width: number = 0;
  getCurrent(){
    let end = false;
    this.items.map(res=>{
      if(res['status'] == 'current'){
        end = true;
      }else{
        if(!end){
          this.width += 103;
        }
      }
    })
  }

}
