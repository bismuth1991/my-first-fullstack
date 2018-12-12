class Api::SearchesController < ApplicationController
  def index
    if params[:query].present?
      @songs = Song.where('title ~ ?', params[:query])
      @artist = Artist.where('name ~ ?', params[:query]).limit(3)
      @albums = Album.where('name ~ ?', params[:query]).limit(3)

      render :index
    else
      render json: []
    end
  end
end
