class Api::SongsController < ApplicationController

  def index 
    @songs = Song.all
    render :index
  end 

  def search
    if params[:query].present?
      @songs = Song.where('title ~ ?', params[:query])
    else
      @songs = Song.none
    end

  if @songs 
    render :index
  else

  end
end
