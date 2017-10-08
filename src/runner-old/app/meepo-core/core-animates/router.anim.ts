import {animate, AnimationTriggerMetadata, group, state, style, transition, trigger} from "@angular/animations";

export const routeAnim:AnimationTriggerMetadata = trigger(
    'routeState',   [
        transition(':leave',[
            style({transform: 'translateX(0%)'}),
            group([
                animate('.3s ease-in-out',style({transform: 'translateX(100%)'})),
                animate('.3s ease-in-out',style({opacity: '0'}))
            ])
        ]),
        transition(':enter',[
            style({transform: 'translateX(-100%)'}),
            group([
                animate('.3s ease-in-out',style({transform: 'translateX(0%)'})),
                animate('.3s ease-in-out',style({opacity: '1'}))
            ])
        ])
    ]
)