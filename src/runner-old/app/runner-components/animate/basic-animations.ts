import { trigger, state, style, transition, animate } from '@angular/animations';

export const clickedStateTrigger:any = trigger('clickedState', [
    state('default', style({
        backgroundColor: 'pink',
        width: '100px',
        height: '100px',
        borderRadius: '0',
        border: '5px solid green'
    })),
    state('clicked', style({
        backgroundColor: 'green',
        width: '300px',
        height: '300px',
        borderRadius: '150px',
        border: '15px solid pink'
    })),
    state('mousedown', style({
        width: '100px',
        height: '100px',
        borderRadius: '0',
        backgroundColor: 'purple',
        border: '3px solid black'
    })),

    transition('default <=> clicked', animate('1500ms 500ms linear')),
    transition('clicked <=> mousedown', animate(500))
]);

export const numberEnteredStateTrigger:any =  trigger('numberEnteredState', [
    state('unselected', style({
        border: '1px solid black',
        padding: '5px',
        backgroundColor: 'white'
    })),
    state('selected', style({
        border: '2px solid blue',
        padding: '4px',
        backgroundColor: 'lightblue'
    })),
    transition('unselected => selected', [
        style({
            border: '2px solid black',
            padding: '4px',
            transform: 'scale(1)'
        }),
        animate('500ms 100ms linear', style({
            backgroundColor: 'purple',
            transform: 'scale(1.3)'
        })),
        animate(500)
    ])
])