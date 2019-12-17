import tippy from 'tippy.js';
import { Controller } from 'stimulus';

export default class extends Controller {
  connect() {
    const options = {
      duration: 0,
      arrow: true,
      delay: [500, 200],
      content: this.content
    }

    this.tooltip = tippy(this.element, options);
  }

  get content() {
    return this.data.get('content');
  }
};
