import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RunnerUtilService} from "../../../runner-components/runner-util.service";

@Component({
  selector: 'im-footer',
  templateUrl: './im-footer.component.html',
  styleUrls: ['./im-footer.component.scss']
})
export class ImFooterComponent implements OnInit {
  key: string = '';
  @Output() onSend: EventEmitter<any> = new EventEmitter()
  @Output() onFocus: EventEmitter<any> = new EventEmitter()

  tools: any[] = []
  constructor(
      public util: RunnerUtilService
  ) {
    this.tools = [
      // {
      //   title: '表情',
      //   icon: window['module_url']+'assets/images/im/face.png',
      //   code: 'face'
      // },
      {
        title: '图片',
        icon: window['module_url']+'assets/images/im/image.png',
        code: 'image'
      },
      {
        title: '语音',
        icon: window['module_url']+'assets/images/im/voice.png',
        code: 'voice'
      },
      // {
      //   title: '名片',
      //   icon: window['module_url']+'assets/images/im/card.png',
      //   code: 'card'
      // },
      {
        title: '位置',
        icon: window['module_url']+'assets/images/im/location.png',
        code: 'location'
      },
      {
        title: '收钱',
        icon: window['module_url']+'assets/images/im/shouqian.png',
        code: 'shouqian'
      },
      // {
      //   title: '视频',
      //   icon: window['module_url']+'assets/images/im/video.png',
      //   code: 'video'
      // },
      // {
      //   title: '红包',
      //   icon: window['module_url']+'assets/images/im/redpack.png',
      //   code: 'redpack'
      // },
      // {
      //   title: '礼物',
      //   icon: window['module_url']+'assets/images/im/gift.png',
      //   code: 'gift'
      // },
      // {
      //   title: '商品',
      //   icon: window['module_url']+'assets/images/im/good.png'
      // },
      // {
      //   title: '图文',
      //   icon: window['module_url']+'assets/images/im/tuwen.png'
      // },
      {
        title: '任务',
        icon: window['module_url']+'assets/images/im/task.png',
        code: 'task'
      }
    ]
  }
  show: any = {
    redpack: false,
    shouqian: false,
    location: false,
    video: false,
    voice: false
  }
  onTool(tool: any){
    this.post['data'] = {}
    this.show[tool.code] = true;
  }

  cancel(){
    for(let key in this.show){
      this.show[key] = false;
    }
  }

  sure(e: any){
    this.post['type'] = e.type;
    this.post['data'] = e.data;
    this.send()
    this.cancel()
  }

  ngOnInit() {
    this.util.hideFooter()
  }
  focus: boolean = false;
  _onFocus(){
    this.post['type'] = 'text';
    this.post['data'] = {}
    this.focus = true;
    this.onFocus.emit('focus')
  }
  // onBlur(){
  //   this.focus = true
  //   this.send()
  // }
  post: any = {
    type: 'text',
    content: '',
    data: {}
  }
  send(){
    this.focus = false;
    this.post['content'] = this.key
    this.onSend.emit(this.post)
    this.key = '';
  }

}
