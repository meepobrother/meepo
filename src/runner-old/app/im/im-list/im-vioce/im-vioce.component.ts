import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { CoreUtilService } from '../../../meepo-core/core-util.service';

@Component({
  selector: 'im-vioce',
  templateUrl: './im-vioce.component.html',
  styleUrls: ['./im-vioce.component.scss']
})
export class ImVioceComponent implements OnInit {
  @Output() onCancel: EventEmitter<any> = new EventEmitter()
  @Output() onSure: EventEmitter<any> = new EventEmitter()
  constructor(
      public core: CoreUtilService
  ) { }

  ngOnInit() {
  }
  localId: string = '';
  serverId: string = '';
  wx: any = window['wx'];
  timeLen: number = 0;
  onRecord(e: any){
    this.localId = e.localId;
    this.timeLen = e.time;
    if(this.localId){
      this.wx.ready(()=>{
        this.wx.uploadVoice({
          localId: this.localId,
          isShowProgressTips: 1,
          success: (res)=>{
            this.serverId = res.serverId;
            this.post['data']['serverId'] = this.serverId;
            this.post['data']['time'] = this.timeLen;
            this.core.post('audio.upload',{serverId: this.serverId}).subscribe(res=>{
              this.post['data']['src'] = res.info;
            })
          }
        })
      })
    }
    this.post.data.time = e.time;
  }

  cancel(){
    this.onCancel.emit('cancel')
  }
  post: any = {
    type: 'voice',
    data: {
      serverId: '',
      time: '',
      src: ''
    }
  }

  sure(){
    this.onSure.emit(this.post)
  }

}
