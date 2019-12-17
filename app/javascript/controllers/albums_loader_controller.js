import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = [ 'artist', 'artistName', 'container' ]

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
      .then(response => response.json())
      .then(({albums, artist}) => {
        this.artistNameTarget.innerHTML = artist
        this.containerTarget.innerHTML = albums.join('');
      });
  }

  get artists() {
    return this.artistTargets;
  }

  get url() {
    return `${this.data.get('url')}?artist_id=${this.id}`
  }
}
