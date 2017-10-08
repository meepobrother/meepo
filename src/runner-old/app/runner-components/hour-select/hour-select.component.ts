import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'suyun-hour-select',
  templateUrl: './hour-select.component.html',
  styleUrls: ['./hour-select.component.scss']
})
export class HourSelectComponent implements OnInit {

  selectedIndex: any[] = [0,0]
  level: number = 2;
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
    this.options = items;
    let today = moment().calendar()
    let todayArray = today.split(':')
    this.options.map((day,key)=>{
      let value = Number(day.value);
      let toHour = Number(todayArray[1])
      if(toHour == value){
        this.selectedIndex[0] = key;

        day.list.map((h,k)=>{
          let value2 = Number(h.value);
          let toMinute = Number(todayArray[2])
          if(toMinute == value2){
            this.selectedIndex[1] = k;
          }
        })
      }
    })
    console.log(this.selectedIndex)
    this.show = true;
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
      "http://meepo.com.cn/bower_components/moment/min/moment-with-locales.min.js"
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
      this.initHours(moment)
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
    let str = item1.name + item2.name;
    let value = item1.value +' '+ item2.value
    this.onSelect.emit({title: str,value: value})
  }

}
