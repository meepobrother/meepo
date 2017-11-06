import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'pay-state-view',
    templateUrl: './pay-state-view.html',
    styleUrls: ['./pay-state-view.scss']
})
export class PayStateView implements OnInit {
    swiperJs: string = 'https://meepo.com.cn/meepo/libs/Chart.min.js';
    swiper: any;
    laodSuccess: Subject<any> = new Subject();
    constructor(
        @Inject(DOCUMENT) public document: any
    ) { 

        this.laodSuccess.subscribe(Chart=>{
            var data = {
                labels : ["January","February","March","April","May","June","July"],
                datasets : [
                    {
                        fillColor : "rgba(220,220,220,0.5)",
                        strokeColor : "rgba(220,220,220,1)",
                        pointColor : "rgba(220,220,220,1)",
                        pointStrokeColor : "#fff",
                        data : [65,59,90,81,56,55,40]
                    },
                    {
                        fillColor : "rgba(151,187,205,0.5)",
                        strokeColor : "rgba(151,187,205,1)",
                        pointColor : "rgba(151,187,205,1)",
                        pointStrokeColor : "#fff",
                        data : [28,48,40,19,96,27,100]
                    }
                ]
            }
            var ctx = document.getElementById("myChart").getContext("2d");
            var myNewChart = new Chart(ctx).PolarArea(data);            
        })
    }

    ngOnInit() { }

    loadJScript() {
        const script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.swiperJs;
        script.onload = () => {
            this.swiper = window['Chart'];
            this.laodSuccess.next(this.swiper);
        };
        script.onerror = () => {
            console.log('Swiper插件加载失败');
        };
        this.document.body.appendChild(script);
    }
}