import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'days-navs',
  templateUrl: './days-navs.component.html',
  styleUrls: ['./days-navs.component.scss']
})
export class DaysNavsComponent implements OnInit {
  @Output() onSelect: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit() {
    this.init()
  }
  options: any[] = []
  selectedIndex: any[] = []
  show: boolean = false;

  initDay(moment: any){
    var items = [];
    let today = moment().calendar()
    let todayArray = today.split(':')
    for(let i=0;i<7;i++){
      let time = moment().add(i,'days').calendar()
      let timeArray = time.split(':')
      let item = {title: timeArray[0],value: moment().add(i,'days').format('L')}
      items.push(item)
    }
    this.options = items;
    this.options.map(res=>{
      if(res.title == todayArray[0]){
        res['active'] = true;
        this._onSelect(res)
      }else{
        res['active']= false;
      }
    })
    this.show = true;
  }

  _onSelect(e: any){
    this.onSelect.emit(e);
  }

  init(){
    window['requirejs']([
      window['module_url'] + "assets/bower_components/moment/min/moment-with-locales.min.js"
    ],(moment)=>{
      let currentLang = 'zh-cn';
      moment.locale(currentLang,{
        calendar: {
          sameDay: "[今天]:LT",
          nextDay: "[明天]:LT",
          nextWeek: "[下]dddd:LT",
          lastDay: "[昨天]:LT",
          lastWeek: "[上]dddd:LT",
          sameElse: "L"
        }
      });
      this.initDay(moment)
    })
  }

}
