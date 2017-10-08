// import {animate, AnimationTriggerMetadata, group, style, transition, trigger} from "@angular/animations";
// export const rightInAnim:AnimationTriggerMetadata = trigger(
//     'rightIn',[
//         transition(':enter',[
//             style({transform: 'translateX(100%)'}),
//             animate('.4s ease-in-out',style({transform: 'translateX(0%)'}))
//         ]),
//         transition(':leave',[
//             style({transform: 'translateX(0%)'}),
//             animate('.5s ease-in-out',style({transform: 'translateX(100%)'}))
//         ])
//     ]
// )

// export const rightInOnlyAnim:AnimationTriggerMetadata = trigger(
//     'rightInOnly',[
//         transition(':enter',[
//             style({transform: 'translateX(10%)'}),
//             animate('.4s ease-in-out',style({transform: 'translateX(0%)'}))
//         ]),
//         transition(':leave',[
//             style({transform: 'translateX(0%)'}),
//             animate('.5s ease-in-out',style({transform: 'translateX(100%)'}))
//         ])
//     ]
// )

// export const downInAnim: AnimationTriggerMetadata = trigger(
//     'downIn',[
//         transition(':enter',[
//             style({transform: 'translateY(-100%)'}),
//             animate('.4s ease-in-out',style({transform: 'translateY(0%)'}))
//         ]),
//         transition(':leave',[
//             style({transform: 'translateY(0%)'}),
//             animate('.4s ease-in-out',style({transform: 'translateY(-100%)'}))
//         ])
//     ]
// )

// export const downInOnlyAnim: AnimationTriggerMetadata = trigger(
//     'downInOnly',[
//         transition(':enter',[
//             style({transform: 'translateY(-44px)'}),
//             animate('.4s ease-in-out',style({transform: 'translateY(0%)'}))
//         ]),
//         transition(':leave',[
//             style({transform: 'translateY(0%)'}),
//             group([
//                 animate('.4s ease-in-out',style({opacity: 0}))
//             ])
//         ])
//     ]
// )

// export const upInAnim: AnimationTriggerMetadata = trigger(
//     'upIn',[
//         transition(':enter',[
//             style({transform: 'translateY(100%)'}),
//             animate('.4s ease-in-out',style({transform: 'translateY(0%)'}))
//         ]),
//         transition(':leave',[
//             style({transform: 'translateY(0%)'}),
//             animate('.4s ease-in-out',style({transform: 'translateY(100%)'}))
//         ])
//     ]
// )

// export const upInOnlyAnim: AnimationTriggerMetadata = trigger(
//     'upInOnly',[
//         transition(':enter',[
//             style({transform: 'translateY(44px)'}),
//             animate('.4s ease-in-out',style({transform: 'translateY(0%)'}))
//         ]),
//         transition(':leave',[
//             style({transform: 'translateY(0%)'}),
//             group([
//                 animate('.4s ease-in-out',style({opacity: 0}))
//             ])
//         ])
//     ]
// )

// export const leftInAnim: AnimationTriggerMetadata = trigger(
//     'leftIn',[
//         transition(':enter',[
//             style({transform: 'translateX(-100%)'}),
//             animate('.4s ease-in-out',style({transform: 'translateX(0%)'}))
//         ])
//     ]
// )