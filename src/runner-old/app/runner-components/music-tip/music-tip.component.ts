import {Directive, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[suyun-music-tip]'
})
export class MusicTipComponent implements OnInit {

  constructor() { }

  @HostListener('touchstart',['$event'])
  onClick($event){
    let audio = new Audio('http://meepo.com.cn/bower_components/mp3/btn-01.mp3');
    audio.play()
  }

  ngOnInit() {
  }

}
