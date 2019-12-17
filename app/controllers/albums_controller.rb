class AlbumsController < ApplicationController
  def index
    artist = Artist.find(params[:artist_id])
    albums = artist.albums

    render json: {
      albums: albums.map { |album| render_album(album) },
      artist: artist.name
    }
  end

  private

  def render_album(album)
    render_to_string(
      partial: 'albums/album',
      locals: { album: album }
    )
  end
end
