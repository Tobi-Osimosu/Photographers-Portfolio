import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Photographer-Portfolio';
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject('windowObject') private window: Window
  ) {}

  onScroll() {
    //getting Window scroll number
    const scrollY = this.window.scrollY;

    // add class scroll to the document body if number is greater than 0 and remove if vice-versa
    scrollY > 0
      ? this.document.body.classList.add('scroll')
      : this.document.body.classList.remove('scroll');
  }
}
