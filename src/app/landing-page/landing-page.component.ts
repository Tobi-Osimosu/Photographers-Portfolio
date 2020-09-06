import { Component, OnInit, AfterViewInit } from '@angular/core';
import anime from 'animejs/lib/anime.es';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    anime({
      targets: '.landing-page',
      delay: 1700,
      translateX: {
        value: [-800, 0],
      },
      duration: 2000,
      // delay: 1000,
      easing: 'easeOutElastic(1, .8)',
      // direction: "alternate",
      // loop: true,
    });

    anime({
      // targets: '#landing-page',
      targets: '.play-video-container',
      translateY: [0, -25],
      duration: 1500,
      easing: 'easeOutElastic(1, .8)',
      direction: 'alternate',
      loop: true,
    });
  }
}
