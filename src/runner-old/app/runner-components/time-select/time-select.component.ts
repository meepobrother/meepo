import {Component, EventEmitter, HostBinding, OnInit, Output} from '@angular/core';

@Component({
  selector: 'suyun-time-select',
  templateUrl: './time-select.component.html',
  styleUrls: ['./time-select.component.scss']
})
export class TimeSelectComponent implements OnInit {
  selectedIndex: any[] = [0,0]
  level: number = 3;
  options: any[] = []

  @Output() onSelect: EventEmitter<any> = new EventEmitter()
  @Output() onInit: EventEmitter<any> = new EventEmitter()
  show: boolean = false;
  constructor() {

  }
  timeCtrl: any;
  _onInit(e: any){
    this.timeCtrl = e;
    this.onInit.emit(e)
  }

  initDay(moment: any){
    var items = [];
    let hour = this.initHours(moment)
    let today = moment().calendar()
    let todayArray = today.split(':')
    for(let i=0;i<7;i++){
      let time = moment().add(i,'days').calendar()
      let timeArray = time.split(':')
      let item = {name: timeArray[0],value: moment().add(i,'days').format('L'),list: hour}
      items.push(item)
    }
    this.options = items;
    this.options.map((day,key)=>{
      if(todayArray[0] == day.name){
        this.selectedIndex[0] = key;
        day.list.map((h,k)=>{
          if(todayArray[1] == h.value){
            this.selectedIndex[1] = k;
            h.list.map((m,j)=>{
              if(todayArray[2] == m.value){
                this.selectedIndex[2] = j;
              }
            })
          }
        })
      }
    })
    this.show = true;
  }

  initHours(moment: any){
    let items = [];
    let minite = this.initTime()
    for(let i=0;i<24;i++){
      if(i<10){
        items.push({name: i+'点',value: '0'+i,list: minite});
      }else{
        items.push({name: i+'点',value: i,list: minite});
      }
    }
    return items;
  }

  initTime(){
    let items = [];
    for(let i=0;i<60;i++){
      if(i<10){
        items.push({name: i+'分',value: '0'+i})
      }else{
        items.push({name: i+'分',value: i})
      }
    }
    return items;
  }

  ngOnInit() {
    setTimeout(()=>{
      this.init()
    },0)
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

  format(fmt: string,date: any){
    var o = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "h+": date.getHours(), //小时
      "m+": date.getMinutes(), //分
      "s+": date.getSeconds(), //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }


  onComplete(item: any){
    let selectedIndex = item.selectedIndex;
    let item1 = this.options[selectedIndex[0]];
    let item2 = item1.list[selectedIndex[1]];
    let item3 = item2.list[selectedIndex[2]];
    let str = item1.name + item2.name + item3.name;
    let value = item1.value +' '+ item2.value +':'+ item3.value;
    this.onSelect.emit({title: str,value: value})
  }

}
