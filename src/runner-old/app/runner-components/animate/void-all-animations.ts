import { trigger, transition, style, animate, group } from '@angular/animations';

export const showStateTrigger:any = trigger('showState', [
    transition(':enter', [
        style({
            opacity: 0
        }),
        animate(1500)
    ]),
    transition(':leave', animate(1500, style({
        opacity: 0
    })))
]);

export const animateStateTrigger:any = trigger('animateState', [
    transition('* => *', [
        animate('3000ms linear', style({
            width: 50
        })),
        animate(1000, style({
            width: '*'
        }))
    ])
]);

export const listStateTrigger:any = trigger('listState', [
    transition(':enter', [
        style({
            opacity: 0,
            background: 'white'
        }),
        group([
            animate(500, style({
                opacity: 0.8
            })),
            animate('1000ms ease-out', style({
                background: 'pink'
            })),
        ]),
        animate(1000, style({
            background: 'lightblue',
            opacity: 1
        }))
    ]),
    transition(':leave', animate(500, style({
        opacity: 0
    })))
])