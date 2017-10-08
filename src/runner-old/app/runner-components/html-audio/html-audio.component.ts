import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'suyun-html-audio',
  templateUrl: './html-audio.component.html',
  styleUrls: ['./html-audio.component.scss']
})
export class HtmlAudioComponent implements OnInit {
  @Input() isUpload: boolean = true;
  @Input() desc: string = '';

  @Output() onRecord: EventEmitter<any> = new EventEmitter()
  @Input() hasGift: boolean = false;

  @Input() audioBtnTitle: string= 'html5录音';
  playIcon: number = 3;
  playTimer: any;
  optStr: string = 'del';
  constructor() { }

  playAnimate(){
    this.playTimer = setInterval(()=>{
      if(this.playIcon >=3){
        this.playIcon --;
        this.optStr = 'del'
      }else if(this.playIcon <=0){
        this.playIcon = 3;
        this.optStr = 'add'
      }else{
        if(this.optStr == 'add'){
          this.playIcon ++;
        }else{
          this.playIcon --;
        }
      }

    },300)
  }
  url: string = '';
  createDownloadLink(){
    this.recorder && this.recorder.exportWAV((blob)=>{
      this.url = URL.createObjectURL(blob);
      console.log(this.url)

      let audio =  new Audio(this.url)
      audio.play();
    })
  }

  ngOnInit() {
    try {
      // webkit shim
      window['AudioContext'] = window['AudioContext'] || window['webkitAudioContext'];
      navigator.getUserMedia = navigator.getUserMedia || navigator['webkitGetUserMedia'];
      window.URL = window.URL || window['webkitURL'];

      this.audio_context = new AudioContext;
    } catch (e) {
      alert('No web audio support in this browser!');
    }

    navigator.getUserMedia({audio: true}, (res)=>{
      this.startUserMedia(res);
    },(e)=>{

    });
  }
  recorder: any;
  audio_context: any;
  startUserMedia(res: any){
    window['requirejs']([
      "http://meepo.com.cn/bower_components/recorder.js"
    ],(Recorder)=>{
        let input = this.audio_context.createMediaStreamSource(res);
        this.recorder = new Recorder(input);
    })
  }
  starting: boolean = false;
  startRecord(){
    if(this.starting){
      this.stopRecording()
      this.starting = false;
    }else{
      this.recorder && this.recorder.record();
      this.starting = true;
    }
  }

  stopRecording(){
    this.recorder && this.recorder.stop();
    console.log('stop record');
    this.createDownloadLink();
  }

  playVoice(){

  }

}
