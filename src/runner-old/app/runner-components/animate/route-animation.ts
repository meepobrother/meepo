import {trigger, transition, style, animate, AnimationTriggerMetadata} from '@angular/animations';

export const routeFadeStateTrigger:AnimationTriggerMetadata = trigger('routeFadeState', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(100%)',
    }),
    animate(300)
  ]),
  transition(':leave', animate(300, style({
    opacity: 0,
    transform: 'translateX(-100%)'
  })))
]);

export const routeSlideStateTrigger:AnimationTriggerMetadata = trigger('routeSlideState', [
  transition(':enter', [
    style({
      transform: 'translateX(-100%)',
      opacity: 0
    }),
    animate(300)
  ]),
  transition(':leave', animate(300, style({
    transform: 'translateX(100%)',
    opacity: 0
  })))
])