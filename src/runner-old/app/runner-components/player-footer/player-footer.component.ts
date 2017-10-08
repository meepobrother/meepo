import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'suyun-player-footer',
  templateUrl: './player-footer.component.html',
  styleUrls: ['./player-footer.component.scss'],
  animations:[
    //在position状态改变时，触发动画
    trigger('position',[
      //position为left时的样式
      state('left',style({
        'left': 0,
        'background-color':'yellow'
      })),
      //position为right时的样式
      state('right',style({
        'left': 200,
        'background-color':'blue'
      })),
      //状态切换时的动画设置
      transition('left => right',animate('1000ms ease-in')),
      transition('right => left',animate('1000ms ease-out'))
    ])
  ]
})
export class PlayerFooterComponent implements OnInit {
  @Input() item: any = {};
  @Input() localId: string = '';
  @Input() playing: boolean = true;
  @Output() onTouchMove: EventEmitter<any> = new EventEmitter()

  @ViewChild('container') container: ElementRef
  constructor(
    public router: Router
  ) { }
  // @ViewChild('audio') audio: ElementRef
  ngOnInit() {
    window['requirejs']([
      "http://meepo.com.cn/bower_components/alloytouch/alloy_touch.js",
      "http://meepo.com.cn/bower_components/alloytouch/transformjs/transform.js",
    ],()=>{
      let box = this.container.nativeElement;
      window['Transform'](box);
      new window['AlloyTouch']({
        touch: box,
        pressMove: (evt)=>{
          box['translateX'] += evt.deltaX;
          box['translateY'] += evt.deltaY;
          this.onTouchMove.emit('move');
        }
      })
    })
    let url = 'http://meepo.com.cn/bower_components/mp3/btn-01.mp3';
    if(this.is_weixin()){
      let wx = window['wx'];
      wx.ready(()=>{
        let audio = new Audio(url)
        audio.play();
      })
      wx.error(()=>{
        let audio = new Audio(url)
        audio.play();
      })
    }else{
      let audio = new Audio(url)
      audio.play();
    }

  }

  is_weixin(){
    let ua:any = navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i)=="micromessenger") {
      return true;
    } else {
      return false;
    }
  }

  onTouch(){
    if(this.item.type == 0 || this.item.type == 1){
      this.router.navigate(['/','song','detail',this.item.id])
    }else if(this.item.type == 2|| this.item.type == 3){
      this.router.navigate(['/','buy','detail',this.item.id])
    }else if(this.item.type == 4 || this.item.type == 5){
      this.router.navigate(['/','help','detail',this.item.id])
    }
  }
  playWechatVoice(){
    let wx = window['wx'];
    if(this.playing){
      wx.pauseVoice({
        localId: this.localId // 需要暂停的音频的本地ID，由stopRecord接口获得
      });
    }else{
      wx.playVoice({
        localId: this.localId // 需要播放的音频的本地ID，由stopRecord接口获得
      });
    }
  }
  onPlay(){
    if(this.localId){
      this.playWechatVoice()
    }
  }
}
