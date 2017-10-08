import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CoreUtilService } from '../../../meepo-core/core-util.service';

@Component({
  selector: 'im-task',
  templateUrl: './im-task.component.html',
  styleUrls: ['./im-task.component.scss']
})
export class ImTaskComponent implements OnInit {
  @Output() onCancel: EventEmitter<any> = new EventEmitter()
  @Output() onSure: EventEmitter<any> = new EventEmitter()
  constructor(
      public core: CoreUtilService
  ) { }

  ngOnInit() {
    this.getAll();
  }
  tasks: any[] = []
  getAll(){
    this.core.post('task.getAll',{}).subscribe(res=>{
      this.tasks = res.info;
    })
  }

  onItem(e: any){
    this.post['data'] = e;
    this.sure()
  }
  post: any = {
    type: 'task',
    data: {}
  }
  cancel(){
    this.onCancel.emit('cancel')
  }

  sure(){
    this.onSure.emit(this.post)
  }

}
