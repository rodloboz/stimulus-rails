class AlbumsController < ApplicationController
  def index
    artist = Artist.find(params[:artist_id])
    @albums = artist.albums

    render layout: false
  end
end
