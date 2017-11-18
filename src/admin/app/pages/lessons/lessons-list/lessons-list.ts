import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';

@Component({
    selector: 'lessons-list',
    templateUrl: './lessons-list.html',
    styleUrls: ['./lessons-list.scss']
})
export class LessonsList implements OnInit {
    calendarOptions: Options;
    @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
    constructor() { }

    ngOnInit() {
        this.calendarOptions = {
            editable: true,
            eventLimit: false,
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listMonth'
            },
            // events: data
        };
    }

    eventClick(e: any) {
        console.log(e);
    }

    updateEvent(e: any) {
        console.log(e);
    }

    clickButton(e: any) {
        console.log(e);
    }
}
