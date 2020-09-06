import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-clients-reviews',
  templateUrl: './clients-reviews.component.html',
  styleUrls: ['./clients-reviews.component.scss'],
})
export class ClientsReviewsComponent implements OnInit {
  slides = [
    'First slide',
    'Second slide',
    'Third slide',
    'Fourth slide',
    'Fifth slide',
    'Sixth slide',
  ];

  config: SwiperConfigInterface = {
    // pagination: { el: '.swiper-pagination', clickable: true },
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    keyboard: true,
    // mousewheel: true,
    navigation: true,
    autoplay: {
      delay: 3000,
    },
    followFinger: true,
    effect: 'coverflow',
  };

  // @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject('windowObject') private window: Window
  ) {}

  ngOnInit() {
    this.window.addEventListener('resize', () => {
      this.window.location.reload();
      this.manageSwiperControls();
    });
  }

  manageSwiperControls() {
    if (matchMedia('(min-width: 768px)').matches) {
      this.document.querySelector('.slider-controls').remove();
    } else if (matchMedia('(max-width: 767px)').matches) {
      this.document.querySelector('.slider-controls-md').remove();
    }
  }
}
