import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ClientsReviewsComponent } from './clients-reviews/clients-reviews.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from './material/material.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { ReactiveFormsModule } from '@angular/forms';
// import {
//   SwiperModule,
//   SWIPER_CONFIG,
//   SwiperConfigInterface,
// } from 'ngx-swiper-wrapper';

// const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
//   direction: 'horizontal',
//   slidesPerView: 'auto',
// };
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    AboutComponent,
    GalleryComponent,
    ClientsReviewsComponent,
    GetInTouchComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HammerModule,
    MaterialModule,
    MatSliderModule,
    SwiperModule,
  ],
  providers: [
    // {
    //   provide: SWIPER_CONFIG,
    //   useValue: DEFAULT_SWIPER_CONFIG,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
