import { trigger, state, style, transition, group, animate, keyframes } from '@angular/animations';


export const rainbowBoxTrigger:any = trigger('rainbowState', [
    transition('* => *', [
        group([
            animate(1000, style({
                opacity: 0.7
            })),
            animate(8000, keyframes([
                style({
                    backgroundColor: 'white',
                    width: '120px',
                    offset: 0
                }),
                style({
                    backgroundColor: 'orange',
                    width: '140px',
                    offset: 0.2
                }),
                style({
                    backgroundColor: 'red',
                    width: '160px',
                    offset: 0.4
                }),
                style({
                    backgroundColor: 'purple',
                    width: '180px',
                    offset: 0.6
                }),
                style({
                    backgroundColor: 'green',
                    width: '200px',
                    offset: 0.8
                }),
                style({
                    backgroundColor: 'blue',
                    width: '220px',
                    offset: 1
                })
            ]))
        ]),
        animate(500, style({
            backgroundColor: 'lightblue'
        })),
        animate(1000)
    ])
]);