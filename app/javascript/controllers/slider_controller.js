import { tns } from 'tiny-slider/src/tiny-slider';
import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = [ 'container' ]

  connect() {
    this.initSlider();
  }

  initSlider() {
    this.slider = tns({
       container: this.containerTarget,
       items: 5,
       slideBy: 1,
       gutter: 10,
       mouseDrag: true,
       arrowKeys: true,
       controls: false,
       nav: false,
     });
  }

  next() {
    this.slider.goTo('next');
  }

  prev() {
    this.slider.goTo('prev');
  }
}
