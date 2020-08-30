import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

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
    pagination: { el: '.swiper-pagination', clickable: true },
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    navigation: true,
    autoplay: {
      delay: 5000,
    },
    followFinger: true,
    effect: 'coverflow',
  };

  // @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  constructor() {}

  ngOnInit(): void {}
}
