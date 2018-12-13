class Api::SongsController < ApplicationController

  def index 
    @songs = Song.includes(:artist, :album).limit(20).offset(params[:offset]).all
    render :index
  end 

end
