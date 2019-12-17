import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = [ 'artist', 'container' ]

  connect() {
    this.id = this.artists[0].dataset.id;
    this.fetchAlbums();
  }

  load() {
    this.id = event.target.dataset.id;
    this.fetchAlbums();
  }

  fetchAlbums() {
    fetch(this.url)
      .then(response => response.text())
      .then(html => {
        this.containerTarget.innerHTML = html;
      });
  }

  get artists() {
    return this.artistTargets;
  }

  get url() {
    return `${this.data.get('url')}?artist_id=${this.id}`
  }
}
