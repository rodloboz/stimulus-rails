class PagesController < ApplicationController
  def index
    @artists = Artist.all
  end
end
