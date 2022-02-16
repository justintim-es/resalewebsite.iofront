import { transition, state, style, animate, trigger } from '@angular/animations';

export const enterSlideFromUp = trigger('enterSlideFromUp', [
    transition(':enter', [
      style({
        transform: 'translateY(-100%)'
      }), animate(500, style({
        transform: 'translateX(0)'
      }))
    ])
])
export const landingSlideEnterFromRight = trigger('landingSlideEnterFromRight', [
  transition(':enter', [
    style({
      transform: 'translateX(100%)'
    }), animate(500, style({
      transform: 'translateX(0)'
    }))
  ])
])
export const landingSlideEnterFromLeft = trigger('landingSlideEnterFromLeft', [
  transition(':enter', [
    style({
      transform: 'translateX(-100%)'
    }), animate(500, style({
      transform: 'translateX(0)'
    }))
  ])
])
export const bottomSlide = trigger('bottomSlide', [
  state('left', style({
    transform: 'translateX(-100%)',
    width: '100%'
  })),
  state('invision', style({
    transform: 'translateX(0)',
    width: '100%',
  })),
  state('right', style({
    transform: 'translateX(100%)',
    width: '100%'
  })),
  state('left-absolute', style({
    transform: 'translateX(-100%)',
    position: 'absolute',
    width: '100%'
  })),
  state('invision-absolute', style({
    transform: 'translateX(0)',
    position: 'absolute',
    width: '100%'

  })),
  state('right-absolute', style({
    transform: 'translateX(100%)',
    position: 'absolute',
    width: '100%'
  })),
  transition('left <=> invision', animate(500)),
  transition('right <=> invision', animate(500)),
  transition('invision-absolute <=> left-absolute', animate(500)),
  transition('invision-absolute <=> right-absolute', animate(500))
])
