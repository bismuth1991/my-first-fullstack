class Api::SearchesController < ApplicationController
  def index
    if params[:query].present? && params[:query] != ""
      @songs = Song.with_attached_url.includes(:artist, album: [cover_image_attachment: :blob]).where('title ~* ?', params[:query])
      @artists = Artist.where('name ~* ?', params[:query]).limit(3)
      @albums = Album.where('name ~* ?', params[:query]).limit(3)
    else
      @songs = []
      @artists = [] 
      @albums = []
    end

    render :index    
  end
end
