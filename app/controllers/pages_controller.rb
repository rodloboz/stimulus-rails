class PagesController < ApplicationController
  def index
    @artists = Artist.all
    @albums = @artists.first.albums
  end
end
